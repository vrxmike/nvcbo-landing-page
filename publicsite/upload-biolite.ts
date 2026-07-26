import { Client, Storage, TablesDB, ID } from 'node-appwrite';
import { InputFile } from 'node-appwrite/file';
import fs from 'fs';
import path from 'path';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const storage = new Storage(client);
const tablesDB = new TablesDB(client);

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
const TABLE_ID = 'media_gallery';

const FOLDER_PATH = '/home/vamp/Downloads/Biolite P/';

async function uploadAndSeed() {
  const files = fs.readdirSync(FOLDER_PATH).filter(f => !f.startsWith('.') && fs.statSync(path.join(FOLDER_PATH, f)).isFile());
  
  // Filter out duplicates that have "(1)" in the name, as the OS creates these for duplicate files.
  const uniqueFiles = files.filter(f => !f.includes('(1)'));
  
  console.log(`Found ${uniqueFiles.length} unique files in ${FOLDER_PATH}`);

  let uploadedCount = 0;
  for (let i = 0; i < uniqueFiles.length; i++) {
    const fileName = uniqueFiles[i];
    const filePath = path.join(FOLDER_PATH, fileName);
    
    try {
      console.log(`[${i+1}/${uniqueFiles.length}] Uploading ${fileName}...`);
      
      const inputFile = InputFile.fromPath(filePath, fileName);
      const uploadedFile = await storage.createFile(BUCKET_ID, ID.unique(), inputFile);
      
      const isLarge = uploadedCount % 5 === 0;
      const isWide = uploadedCount % 3 === 0 && !isLarge;
      let colSpan = '';
      if (isLarge) colSpan = 'md:col-span-2 lg:col-span-2';
      else if (isWide) colSpan = 'md:col-span-2 lg:col-span-1';

      const rowData = {
        title: fileName.replace(/\.(HEIC|heic|JPG|jpg|PNG|png)$/i, ''),
        category: 'BIOLIT',
        type: 'image',
        appwriteId: uploadedFile.$id,
        caption: 'Documenting the Biolite community project.',
        colSpan: colSpan || null
      };

      await tablesDB.createRow(DB_ID, TABLE_ID, ID.unique(), rowData);
      console.log(`  -> Seeded row for ${fileName}`);
      uploadedCount++;
    } catch (err: any) {
      console.error(`  -> Failed to upload ${fileName}:`, err.message);
    }
  }

  console.log(`Upload and seed complete! Successfully processed ${uploadedCount} files into BIOLIT.`);
}

uploadAndSeed().catch(console.error);
