import 'dotenv/config';
import { Client, Query, Storage } from 'node-appwrite';
import appwriteFunction from './src/main.js';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';

async function bulkConvert() {
  console.log("🔍 Scanning Appwrite Storage Bucket for all .MOV files...");
  
  const storage = new Storage(client);
  let allMovFiles = [];
  let lastId = null;

  // 1. Paginate through the entire bucket to collect ALL .MOV files
  while (true) {
    const queries = [Query.limit(100)];
    if (lastId) queries.push(Query.cursorAfter(lastId));
    
    const res = await storage.listFiles(bucketId, queries);
    
    for (const file of res.files) {
      if (file.name.toLowerCase().endsWith('.mov')) {
        allMovFiles.push(file);
      }
    }
    
    if (res.files.length < 100) {
      break; // Reached the end of the bucket
    }
    
    lastId = res.files[res.files.length - 1].$id;
  }

  if (allMovFiles.length === 0) {
    console.log("✅ Zero .MOV files found in the bucket. Everything is already optimal!");
    return;
  }

  console.log(`\n🎯 Found ${allMovFiles.length} .MOV files requiring conversion.`);
  console.log("==================================================");

  // 2. Iteratively process each MOV file
  for (let i = 0; i < allMovFiles.length; i++) {
    const file = allMovFiles[i];
    console.log(`\n⏳ [${i + 1}/${allMovFiles.length}] Initiating conversion for: ${file.name} (${file.$id})`);

    // Build the exact mock payload that Appwrite's Cloud Engine would normally generate
    const req = {
      variables: {
        APPWRITE_FUNCTION_EVENT: `buckets.${bucketId}.files.${file.$id}.create`,
        APPWRITE_FUNCTION_EVENT_DATA: JSON.stringify({
          $id: file.$id,
          bucketId: bucketId,
          name: file.name
        }),
        APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
        APPWRITE_FUNCTION_PROJECT_ID: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
        APPWRITE_API_KEY: process.env.APPWRITE_API_KEY,
        NEXT_PUBLIC_APPWRITE_DATABASE_ID: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
      }
    };

    const responseObj = {
      json: (data, statusCode = 200) => {
        console.log(`\n[✅ FUNCTION FINISHED - ${statusCode}]:`, JSON.stringify(data, null, 2));
        return data;
      }
    };

    const log = (msg) => console.log(`   [LOG] ${msg}`);
    const error = (msg) => console.error(`   [ERROR] ${msg}`);

    // Await the local execution of our FFmpeg logic
    await appwriteFunction({ req, res: responseObj, log, error });
    console.log(`\n🎉 Successfully completed ${file.name}! Moving to next...`);
  }

  console.log("\n==================================================");
  console.log(`🏆 BULK CONVERSION COMPLETE! All ${allMovFiles.length} files processed successfully.`);
}

bulkConvert().catch(console.error);
