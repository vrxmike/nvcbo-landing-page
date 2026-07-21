// src/app/lib/listAppwriteImages.ts
import { Client, Storage, Query } from "node-appwrite";

/**
 * List image files from the configured Appwrite bucket using the modern SDK (tables/rows/buckets).
 * Returns an array of preview URLs (WebP, width=1200) suitable for the gallery.
 */
export async function listBucketImages() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "") // e.g., https://fra.cloud.appwrite.io/v1
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "")
    .setKey(process.env.APPWRITE_API_KEY ?? "");

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID ?? "nvcbo_bucket";
  const storage = new Storage(client);

  const limit = 100;
  let cursor: string | undefined = undefined;
  const allFiles: Array<{ $id: string; name: string; mimeType: string }> = [];

  do {
    const queries = [Query.limit(limit)];
    if (cursor) queries.push(Query.cursorAfter(cursor));
    const resp = await storage.listFiles(bucketId, queries);
    allFiles.push(...resp.files);
    if (resp.files.length < limit) break;
    cursor = resp.files[resp.files.length - 1].$id;
  } while (true);

  // Keep only image MIME types
  const images = allFiles.filter((f) => f.mimeType.startsWith("image/"));

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.replace(/\/v1$/, "") ?? "https://fra.cloud.appwrite.io";
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";

  const previewUrls = images.map((file) => {
    const url = `${endpoint}/storage/buckets/${bucketId}/files/${file.$id}/preview?width=1200&output=webp&project=${projectId}`;
    return { id: file.$id, name: file.name, url };
  });

  console.log("🖼️  Image preview URLs:");
  previewUrls.forEach((img) => console.log(`${img.name}: ${img.url}`));
  return previewUrls;
}

if (require.main === module) {
  listBucketImages().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
