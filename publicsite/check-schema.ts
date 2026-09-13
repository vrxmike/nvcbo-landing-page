import { Client, TablesDB } from 'node-appwrite';

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

const tablesDB = new TablesDB(client);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(tablesDB)));
