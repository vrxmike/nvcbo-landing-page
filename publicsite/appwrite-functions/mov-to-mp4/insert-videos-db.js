require('dotenv/config');
const { Client, TablesDB, Storage, Query, ID } = require('node-appwrite');

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const tablesDB = new TablesDB(client);
const storage = new Storage(client);

const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;
const tableId = 'media_gallery';

async function updateMediaGallery() {
  console.log("🔍 Fetching all .mp4 videos from the Appwrite bucket...");
  
  let allMp4Files = [];
  let lastId = null;
  
  while (true) {
    const queries = [Query.limit(100)];
    if (lastId) queries.push(Query.cursorAfter(lastId));
    
    const res = await storage.listFiles(bucketId, queries);
    for (const file of res.files) {
      if (file.name.toLowerCase().endsWith('.mp4')) {
        allMp4Files.push(file);
      }
    }
    
    if (res.files.length < 100) break;
    lastId = res.files[res.files.length - 1].$id;
  }
  
  console.log(`Found ${allMp4Files.length} .mp4 videos in the bucket.`);
  if (allMp4Files.length === 0) {
    console.log("No MP4 files found. Did the conversions finish?");
    return;
  }

  // Fetch existing rows to avoid duplicates
  let allRows = [];
  lastId = null;
  while (true) {
    const res = await tablesDB.listRows(dbId, tableId, [Query.limit(100), ...(lastId ? [Query.cursorAfter(lastId)] : [])]);
    allRows = allRows.concat(res.rows);
    if (res.rows.length < 100) break;
    lastId = res.rows[res.rows.length - 1].$id;
  }
  
  const existingAppwriteIds = new Set(allRows.map(r => r.appwriteId));
  
  let addedCount = 0;
  for (const file of allMp4Files) {
    if (existingAppwriteIds.has(file.$id)) {
      console.log(`[SKIP] Video ${file.name} is already in the media_gallery.`);
      continue;
    }
    
    console.log(`[ADD] Adding ${file.name} to media_gallery...`);
    try {
      await tablesDB.createRow(dbId, tableId, ID.unique(), {
        title: file.name.replace(/\.mp4$/i, ''),
        category: 'ALL', // Default category
        type: 'video',
        appwriteId: file.$id,
        caption: 'Optimized video file.',
        colSpan: 'md:col-span-2 lg:col-span-2' // make videos span wider by default
      });
      addedCount++;
    } catch (err) {
      console.error(`Failed to add ${file.name}: ${err.message}`);
    }
  }
  
  console.log(`\n✅ Done! Successfully added ${addedCount} new videos to the media_gallery.`);
}

updateMediaGallery();
