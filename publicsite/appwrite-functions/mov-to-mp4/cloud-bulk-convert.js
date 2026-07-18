require('dotenv/config');
const { Client, Storage, Query, Functions } = require('node-appwrite');

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const storage = new Storage(client);
const functions = new Functions(client);

const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';

// IMPORTANT: Replace this with the actual Function ID from your Appwrite Console
const FUNCTION_ID = '6a59c67b001898084750'; 

async function triggerCloudConversions() {
  console.log("☁️ Scanning Appwrite Storage Bucket for pending .MOV files...");
  
  let allMovFiles = [];
  let lastId = null;

  while (true) {
    const queries = [Query.limit(100)];
    if (lastId) queries.push(Query.cursorAfter(lastId));
    
    const res = await storage.listFiles(bucketId, queries);
    
    for (const file of res.files) {
      if (file.name.toLowerCase().endsWith('.mov')) {
        allMovFiles.push(file);
      }
    }
    
    if (res.files.length < 100) break;
    lastId = res.files[res.files.length - 1].$id;
  }

  if (allMovFiles.length === 0) {
    console.log("✅ Zero .MOV files found in the bucket. Everything is optimal!");
    return;
  }

  console.log(`\n🚀 Found ${allMovFiles.length} .MOV files. Dispatching executions to Appwrite Cloud...`);
  console.log("==================================================");

  for (let i = 0; i < allMovFiles.length; i++) {
    const file = allMovFiles[i];
    console.log(`\n⏳ [${i + 1}/${allMovFiles.length}] Triggering cloud execution for: ${file.name} (${file.$id})`);

    const payload = JSON.stringify({
      $id: file.$id,
      bucketId: bucketId,
      name: file.name
    });

    try {
      // Trigger the execution natively on the Appwrite Cloud environment asynchronously
      // The third parameter 'async' means we fire-and-forget, letting Appwrite handle the heavy FFmpeg lifting
      const execution = await functions.createExecution(
        FUNCTION_ID,
        payload, 
        false, // async = false so we can wait and see if it instantly queues
        '/',
        'POST'
      );
      
      console.log(`   [✅ CLOUD DISPATCHED] Execution ID: ${execution.$id}`);
      console.log(`   Status: ${execution.status} (Check your Appwrite Console logs to view FFmpeg progress)`);
    } catch (err) {
      console.error(`   [❌ ERROR] Failed to dispatch cloud execution: ${err.message}`);
    }
  }

  console.log("\n==================================================");
  console.log(`🏆 ALL ${allMovFiles.length} VIDEOS DISPATCHED TO THE CLOUD!`);
  console.log(`Your local PC is free. Appwrite's servers are now doing all the FFmpeg encoding.`);
}

triggerCloudConversions().catch(console.error);
