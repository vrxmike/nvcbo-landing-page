import { Client, TablesDB, Query } from 'node-appwrite';
import MediaGalleryClient, { MediaItem } from './MediaGalleryClient';

export const dynamic = 'force-dynamic';

async function getMediaFiles(): Promise<MediaItem[]> {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const tablesDB = new TablesDB(client);
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';

    const response = await tablesDB.listRows(dbId, 'media_gallery', [
      Query.limit(100)
    ]);
    
    // Map Appwrite rows to MediaItem interface
    return response.rows.map((row: any) => {
      let videoUrl = undefined;
      if (row.type === 'video') {
        const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
        const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';
        const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
        videoUrl = `${endpoint}/storage/buckets/${bucketId}/files/${row.appwriteId}/view?project=${projectId}`;
      }

      return {
        id: row.$id,
        title: row.title,
        category: row.category,
        type: row.type,
        appwriteId: row.appwriteId,
        videoUrl: videoUrl,
        caption: row.caption,
        colSpan: row.colSpan,
      };
    });
  } catch (error) {
    console.error('Error fetching media from Appwrite TablesDB:', error);
    return [];
  }
}

export default async function MediaGalleryPage() {
  const mediaItems = await getMediaFiles();
  return <MediaGalleryClient mediaItems={mediaItems} />;
}
