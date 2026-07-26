import { Client, TablesDB, Query } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const tablesDB = new TablesDB(client);
const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
const tableId = 'media_gallery';

async function checkRows() {
  const response = await tablesDB.listRows(dbId, tableId, [Query.equal('category', 'SWEDEN')]);
  console.log(`Found ${response.rows.length} rows for SWEDEN category.`);
  if (response.rows.length > 0) {
      console.log('Sample row:', response.rows[0]);
  }
}

checkRows().catch(console.error);
