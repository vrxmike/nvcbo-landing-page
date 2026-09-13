import { Client as AppwriteClient, Storage } from 'appwrite';

const client = new AppwriteClient()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

const storage = new Storage(client);
const viewUrl = storage.getFileView('nvcbo_bucket', 'some_file_id').toString();
console.log("View URL:", viewUrl);
