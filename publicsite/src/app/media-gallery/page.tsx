import { Client, Storage } from 'node-appwrite';
import MediaGalleryClient, { MediaItem } from './MediaGalleryClient';

export const dynamic = 'force-dynamic';

async function getMediaFiles(): Promise<MediaItem[]> {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!);

    const storage = new Storage(client);
    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';

    const response = await storage.listFiles(bucketId);
    
    // Map Appwrite files to MediaItem interface
    return response.files.map((file, idx) => {
      // Determine size span logically for asymmetric Bento grid
      const isLarge = idx % 5 === 0;
      const isWide = idx % 3 === 0 && !isLarge;
      
      let colSpan = '';
      if (isLarge) colSpan = 'md:col-span-2 lg:col-span-2';
      else if (isWide) colSpan = 'md:col-span-2 lg:col-span-1';

      return {
        id: file.$id,
        title: file.name.replace('.HEIC.heif', '').replace('.heic', ''), // Clean up extensions
        category: 'GOTU', // Defaulting to GOTU as requested
        type: file.mimeType.includes('video') ? 'video' : 'image',
        appwriteId: file.$id,
        caption: `Harvested from Gotu Gamachu Farm records. Original file size: ${(file.sizeOriginal / 1024 / 1024).toFixed(1)}MB`,
        colSpan,
      };
    });
  } catch (error) {
    console.error('Error fetching media from Appwrite Storage:', error);
    return [];
  }
}

export default async function MediaGalleryPage() {
  const mediaItems = await getMediaFiles();
  return <MediaGalleryClient mediaItems={mediaItems} />;
}
