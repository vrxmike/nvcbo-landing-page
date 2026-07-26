import { Client, Databases, Storage, ID, Query } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);
const storage = new Storage(client);

const DB_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const BUCKET_ID = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
const COLLECTION_ID = 'media_gallery';

async function seed() {
  console.log('Fetching files from bucket:', BUCKET_ID);
  const filesResponse = await storage.listFiles(BUCKET_ID);
  const files = filesResponse.files;
  console.log(`Found ${files.length} files in bucket.`);

  console.log(`Checking if collection ${COLLECTION_ID} exists...`);
  try {
    await databases.getCollection(DB_ID, COLLECTION_ID);
    console.log('Collection exists. Proceeding to seed documents.');
  } catch (error: any) {
    if (error.code === 404) {
      console.log('Collection not found. Creating collection...');
      await databases.createCollection(DB_ID, COLLECTION_ID, 'Media Gallery');
      console.log('Creating attributes...');
      await databases.createStringAttribute(DB_ID, COLLECTION_ID, 'title', 255, true);
      await databases.createStringAttribute(DB_ID, COLLECTION_ID, 'category', 100, true);
      await databases.createStringAttribute(DB_ID, COLLECTION_ID, 'type', 50, true);
      await databases.createStringAttribute(DB_ID, COLLECTION_ID, 'appwriteId', 100, true);
      await databases.createStringAttribute(DB_ID, COLLECTION_ID, 'caption', 1000, false);
      await databases.createStringAttribute(DB_ID, COLLECTION_ID, 'colSpan', 50, false);
      
      console.log('Waiting 5 seconds for attributes to propagate in Appwrite Cloud...');
      await new Promise(resolve => setTimeout(resolve, 5000));
    } else {
      throw error;
    }
  }

  console.log('Seeding documents...');
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
    // Check if document already exists for this appwriteId to avoid duplicates
    const existing = await databases.listDocuments(DB_ID, COLLECTION_ID, [
        Query.equal("appwriteId", file.$id)
    ]).catch(() => ({ documents: [] }));

    if (existing.documents.length > 0) {
        console.log(`Document for ${file.$id} already exists. Skipping.`);
        continue;
    }

    const isLarge = i % 5 === 0;
    const isWide = i % 3 === 0 && !isLarge;
    let colSpan = '';
    if (isLarge) colSpan = 'md:col-span-2 lg:col-span-2';
    else if (isWide) colSpan = 'md:col-span-2 lg:col-span-1';

    const documentData = {
      title: file.name.replace('.HEIC.heif', '').replace('.heic', ''),
      category: 'GOTU', // Hardcoded GOTU as requested
      type: file.mimeType.includes('video') ? 'video' : 'image',
      appwriteId: file.$id,
      caption: `Harvested from Gotu Gamachu Farm records. Original file size: ${(file.sizeOriginal / 1024 / 1024).toFixed(1)}MB`,
      colSpan: colSpan || null
    };

    try {
      await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), documentData);
      console.log(`Successfully seeded document for ${file.name}`);
    } catch (docErr: any) {
      console.error(`Failed to seed document for ${file.name}:`, docErr.message);
    }
  }

  console.log('Seeding complete!');
}

seed().catch(console.error);
