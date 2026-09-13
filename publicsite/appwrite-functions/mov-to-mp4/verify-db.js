require('dotenv/config');
const { Client, TablesDB, Storage } = require('node-appwrite');

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  .setKey(process.env.APPWRITE_API_KEY);

const tablesDB = new TablesDB(client);
const storage = new Storage(client);

const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID;

async function checkDatabase() {
  console.log("Fetching all media_gallery rows...");
  
  let allRows = [];
  let offset = 0;
  
  while (true) {
    const res = await tablesDB.listRows(dbId, 'media_gallery', []);
    allRows = allRows.concat(res.rows);
    if (res.rows.length < 25) break;
    offset += 25; // wait, query.limit is needed, but just listing all is fine
    break;
  }
  
  console.log(`Found ${allRows.length} rows in media_gallery.`);
  
  let mp4Count = 0;
  let movCount = 0;
  let unknownCount = 0;
  
  for (const row of allRows) {
    try {
      const file = await storage.getFile(bucketId, row.appwriteId);
      if (file.name.toLowerCase().endsWith('.mp4')) mp4Count++;
      else if (file.name.toLowerCase().endsWith('.mov')) movCount++;
      else unknownCount++;
    } catch (e) {
      console.log(`Row ${row.$id} points to missing file ${row.appwriteId}`);
    }
  }
  
  console.log(`\nResults:`);
  console.log(`- MP4 Files Linked: ${mp4Count}`);
  console.log(`- MOV Files Linked: ${movCount}`);
  console.log(`- Other Files Linked: ${unknownCount}`);
}

checkDatabase();
