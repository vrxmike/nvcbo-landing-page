import { Client, TablesDB, Storage, ID, Query } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const tablesDB = new TablesDB(client);
const storage = new Storage(client);

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
const TABLE_ID = 'media_gallery';

async function seed() {
  console.log('Fetching files from bucket:', BUCKET_ID);
  const filesResponse = await storage.listFiles(BUCKET_ID, [Query.limit(100)]);
  const files = filesResponse.files;
  console.log(`Found ${files.length} files in bucket.`);
  
  console.log(`Checking if table ${TABLE_ID} exists...`);
  try {
    await tablesDB.getTable(DB_ID, TABLE_ID);
    console.log('Table exists. Will delete and recreate for clean slate since we are shifting from old collections/bucket model.');
    await tablesDB.deleteTable(DB_ID, TABLE_ID);
    console.log('Waiting for deletion to propagate...');
    await new Promise(resolve => setTimeout(resolve, 3000));
  } catch (error: any) {
    if (error.code !== 404) {
      throw error;
    }
  }

  console.log('Creating table...');
  await tablesDB.createTable(DB_ID, TABLE_ID, 'Media Gallery');
  console.log('Creating columns...');
  await tablesDB.createStringColumn(DB_ID, TABLE_ID, 'title', 255, true);
  await tablesDB.createStringColumn(DB_ID, TABLE_ID, 'category', 100, true);
  await tablesDB.createStringColumn(DB_ID, TABLE_ID, 'type', 50, true);
  await tablesDB.createStringColumn(DB_ID, TABLE_ID, 'appwriteId', 100, true);
  await tablesDB.createStringColumn(DB_ID, TABLE_ID, 'caption', 1000, false);
  await tablesDB.createStringColumn(DB_ID, TABLE_ID, 'colSpan', 50, false);
  
  console.log('Waiting 5 seconds for columns to propagate in Appwrite Cloud...');
  await new Promise(resolve => setTimeout(resolve, 5000));

  console.log('Seeding rows...');
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    const isLarge = i % 5 === 0;
    const isWide = i % 3 === 0 && !isLarge;
    let colSpan = '';
    if (isLarge) colSpan = 'md:col-span-2 lg:col-span-2';
    else if (isWide) colSpan = 'md:col-span-2 lg:col-span-1';

    const isOldGotuFile = file.name.includes('.heif');
    const assignedCategory = isOldGotuFile ? 'GOTU' : 'BRUNS_KENYA';

    const rowData = {
      title: file.name.replace('.HEIC.heif', '').replace('.heic', '').replace('.JPG', ''),
      category: assignedCategory,
      type: file.mimeType.includes('video') ? 'video' : 'image',
      appwriteId: file.$id,
      caption: isOldGotuFile 
        ? 'Harvested from Gotu Gamachu Farm records.' 
        : 'Captured during the collaborative ecosystem visit and local mentorship programs.',
      colSpan: colSpan || null
    };

    try {
      await tablesDB.createRow(DB_ID, TABLE_ID, ID.unique(), rowData);
      console.log(`Successfully seeded row for ${file.name}`);
    } catch (docErr: any) {
      console.error(`Failed to seed row for ${file.name}:`, docErr.message);
    }
  }

  console.log('Seeding complete!');
}

seed().catch(console.error);
