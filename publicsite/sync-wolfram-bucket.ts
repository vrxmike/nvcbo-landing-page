import { Client, Storage, TablesDB, ID, Query } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const storage = new Storage(client);
const tablesDB = new TablesDB(client);

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
const TABLE_ID = 'media_gallery';

async function syncBucket() {
  console.log('Fetching all table rows...');
  let allRows = [];
  let lastId = null;
  while(true) {
    const queries = [Query.limit(100)];
    if (lastId) queries.push(Query.cursorAfter(lastId));
    const res = await tablesDB.listRows(DB_ID, TABLE_ID, queries);
    allRows.push(...res.rows);
    if (res.rows.length < 100) break;
    lastId = res.rows[res.rows.length - 1].$id;
  }
  
  const existingAppwriteIds = new Set(allRows.map(r => r.appwriteId));
  console.log(`Found ${existingAppwriteIds.size} files mapped in the table.`);

  console.log('Fetching all bucket files...');
  let allFiles = [];
  lastId = null;
  while(true) {
    const queries = [Query.limit(100)];
    if (lastId) queries.push(Query.cursorAfter(lastId));
    const res = await storage.listFiles(BUCKET_ID, queries);
    allFiles.push(...res.files);
    if (res.files.length < 100) break;
    lastId = res.files[res.files.length - 1].$id;
  }

  console.log(`Found ${allFiles.length} files in the bucket.`);

  let seeded = 0;
  for (const file of allFiles) {
    if (!existingAppwriteIds.has(file.$id)) {
      console.log(`File ${file.name} (${file.$id}) is missing from table. Seeding into WOLFRAM...`);
      const isVideo = file.name.toLowerCase().includes('mov') || file.name.toLowerCase().includes('mp4');
      const rowData = {
        title: file.name.replace(/\.(HEIC|heic|JPG|jpg|PNG|png|MOV|mov|MP4|mp4)$/i, ''),
        category: 'WOLFRAM',
        type: isVideo ? 'video' : 'image',
        appwriteId: file.$id,
        caption: isVideo 
          ? 'Large video footage from the Wolfram STEM programming camp.'
          : 'Photographic documentation of the Wolfram STEM programming camp.',
        colSpan: 'md:col-span-2 lg:col-span-2' // Make these large ones span more
      };

      await tablesDB.createRow(DB_ID, TABLE_ID, ID.unique(), rowData);
      console.log(` -> Seeded ${file.name}`);
      seeded++;
    }
  }

  console.log(`Sync complete! Seeded ${seeded} missing files.`);
}

syncBucket().catch(console.error);
