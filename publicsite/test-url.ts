import { Client as AppwriteClient, Storage, ImageFormat } from 'appwrite';

const client = new AppwriteClient()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

const storage = new Storage(client);
const url1 = storage.getFilePreview('nvcbo_bucket', 'some_file_id', 1200, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ImageFormat.Webp).toString();
console.log("URL1:", url1);

// What if we just omit the extra params?
// In newer Appwrite versions (like v13), it's:
const url2 = storage.getFilePreview('nvcbo_bucket', 'some_file_id').toString();
console.log("URL2:", url2);
