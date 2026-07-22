// src/app/lib/getSpecificBucketImages.ts
// Returns preview URLs for a predefined set of 6 file IDs from the Appwrite bucket.
// This is useful when you want to display a fixed gallery rather than all bucket contents.

import { Client, Storage } from "node-appwrite";

export async function getSpecificBucketImages() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "")
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "")
    .setKey(process.env.APPWRITE_API_KEY ?? "");

  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID ?? "nvcbo_bucket";
  const storage = new Storage(client);

  // Hard‑coded file IDs (choose any six you like). These correspond to the first six files listed in the bucket.
  const fileIds = [
    "6a5584e100306a35c9ce",
    "6a5584e100306124378d",
    "6a5584e10030657d429e",
    "6a5584e10030648a1bc6",
    "6a5584e100306edd1fc7",
    "6a5584e10030672ce1ac",
  ];

  const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT?.replace(/\/v1$/, "") ?? "https://fra.cloud.appwrite.io";
  const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "";

  const previewUrls = fileIds.map((id) => {
    const url = `${endpoint}/storage/buckets/${bucketId}/files/${id}/preview?width=1200&output=webp&project=${projectId}`;
    return { src: url, alt: id, caption: id };
  });

  return previewUrls;
}

// Allow running the file directly for debugging
if (require.main === module) {
  getSpecificBucketImages()
    .then((imgs) => console.log(imgs))
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}
