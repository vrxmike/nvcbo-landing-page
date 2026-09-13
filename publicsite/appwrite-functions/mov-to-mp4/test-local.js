import 'dotenv/config';
import { Client, TablesDB, Query, Storage } from 'node-appwrite';
import appwriteFunction from './src/main.js';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const tablesDB = new TablesDB(client);
const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';

async function testFunction() {
  console.log("Fetching a live .MOV file from the database to test with...");
  
  // Search the bucket directly for a .MOV file
  const storage = new Storage(client);
  let targetFileId = null;
  let targetFileName = null;
  let lastId = null;

  while (!targetFileId) {
    const queries = [Query.limit(100)];
    if (lastId) queries.push(Query.cursorAfter(lastId));
    
    const res = await storage.listFiles(bucketId, queries);
    if (res.files.length === 0) break;
    
    for (const file of res.files) {
      if (file.name.toLowerCase().endsWith('.mov')) {
        targetFileId = file.$id;
        targetFileName = file.name;
        break;
      }
    }
    
    if (!targetFileId && res.files.length === 100) {
      lastId = res.files[res.files.length - 1].$id;
    } else {
      break;
    }
  }

  if (!targetFileId) {
    console.error("Could not find a video file in the database to test with.");
    return;
  }

  console.log(`Found target file: ${targetFileName} (${targetFileId})`);

  // Mocking the Appwrite Function environment
  const req = {
    variables: {
      APPWRITE_FUNCTION_EVENT: `buckets.${bucketId}.files.${targetFileId}.create`,
      APPWRITE_FUNCTION_EVENT_DATA: JSON.stringify({
        $id: targetFileId,
        bucketId: bucketId,
        name: targetFileName
      }),
      APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
      APPWRITE_FUNCTION_PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
      APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
      NEXT_PUBLIC_APPWRITE_DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    }
  };

  const responseObj = {
    json: (data, statusCode = 200) => {
      console.log(`\n[FUNCTION RESPONSE - ${statusCode}]:`, JSON.stringify(data, null, 2));
      return data;
    }
  };

  const log = (msg) => console.log(`[LOG] ${msg}`);
  const error = (msg) => console.error(`[ERROR] ${msg}`);

  console.log("\n==================================================");
  console.log("🚀 EXECUTING FUNCTION LOCALLY...");
  console.log("==================================================\n");

  await appwriteFunction({ req, res: responseObj, log, error });
}

testFunction().catch(console.error);
