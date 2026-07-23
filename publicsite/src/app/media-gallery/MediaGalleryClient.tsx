"use client";

import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import { Client as AppwriteClient, Storage, ImageFormat } from 'appwrite';

export type Category = 'ALL' | 'GOTU' | 'BIOLIT' | 'BRUNS_KENYA' | 'SWEDEN' | 'WOLFRAM';

export interface MediaItem {
  id: string;
  title: string;
  category: Exclude<Category, 'ALL'>;
  type: 'image' | 'video';
  appwriteId: string;
  videoUrl?: string;
  caption: string;
  colSpan?: string;
}

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'ALL', label: 'All Media' },
  { id: 'GOTU', label: 'Gotu Farm' },
  { id: 'BIOLIT', label: 'Biolit Camp' },
  { id: 'BRUNS_KENYA', label: 'Bruns in Kenya' },
  { id: 'SWEDEN', label: 'Sweden Exchanges' },
  { id: 'WOLFRAM', label: 'Wolfram STEM' },
];

const getImageUrl = (appwriteId: string) => {
  if (appwriteId.startsWith('http')) return appwriteId;
  const client = new AppwriteClient()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');
  
  const storage = new Storage(client);
  const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
  
  // Natively generate the WebP preview using the Appwrite SDK
  // Appwrite SDK signature: getFilePreview(bucketId, fileId, width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output)
  return storage.getFilePreview(bucketId, appwriteId, 1200, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, ImageFormat.Webp).toString();
};

export default function MediaGalleryClient({ mediaItems }: { mediaItems: MediaItem[] }) {
  const [activeCategory, setActiveCategory] = useState<Category>('ALL');
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [dynamicMedia, setDynamicMedia] = useState<MediaItem[]>(mediaItems);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category')?.toUpperCase() as Category | undefined;
      if (catParam && CATEGORIES.some(c => c.id === catParam)) {
        setActiveCategory(catParam);
      }
    }
  }, []);

  useEffect(() => {
    const client = new AppwriteClient();
    client
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

    const bucketId = process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket';
    const dbId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || 'nvcbo_db';
    const tableId = 'media_gallery';

    // Subscribe to bucket events AND database table events using the new tables/rows format
    const unsubscribe = client.subscribe([
        `buckets.${bucketId}.files`,
        `databases.${dbId}.tables.${tableId}.rows`
    ], (response: any) => {
      // Check if it's a delete event from either the bucket or the table
      const isDelete = response.events.some((event: string) => event.includes('.delete'));
      
      if (isDelete) {
        // payload.$id is the appwriteId if it's a bucket event. 
        // If it's a table event, payload.appwriteId contains the appwriteId we care about (or payload.$id if we mapped it 1:1, but we used ID.unique() for rows)
        const deletedFileId = response.payload.appwriteId || response.payload.$id;
        
        // Remove instantly from frontend
        setDynamicMedia(prev => prev.filter(item => item.appwriteId !== deletedFileId));
        
        // Close modal if the currently open image was the one deleted
        setLightboxItem(current => current?.appwriteId === deletedFileId ? null : current);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const filteredMedia = activeCategory === 'ALL' 
    ? dynamicMedia 
    : dynamicMedia.filter(item => item.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen bg-white pt-24 pb-32">
      
      {/* SECTION 1: Media Hub Hero Layout */}
      <section className="pt-16 pb-12 px-6">
        <div className="container max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-heading mb-6 tracking-tight leading-tight">
            Media Gallery
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">
            Our Journey in Frames and Stories
          </h2>
          <p className="text-base md:text-lg text-body leading-relaxed max-w-3xl mx-auto">
            A dedicated repository capturing the physical reality of our community programs. Explore photos and videos documenting active Healing Circles, dryland farming models, holiday computing camps, and global technical exchanges.
          </p>
        </div>
      </section>

      {/* SECTION 2: Interactive Category Filter Bar */}
      <section className="py-8 px-6 border-y border-muted/30 bg-neutral-light/30 sticky top-20 z-30 backdrop-blur-md">
        <div className="container max-w-6xl mx-auto">
          <div className="flex overflow-x-auto hide-scrollbar pb-2 md:pb-0 md:flex-wrap md:justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white text-heading border-muted hover:border-primary/50 hover:text-primary'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Asymmetrical Media Bento Grid */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {filteredMedia.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className={`group relative overflow-hidden rounded-[24px] bg-neutral-light border border-muted shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${item.colSpan || ''}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Image / Video Thumbnail Background */}
                {item.type === 'video' ? (
                  <video
                    src={item.videoUrl || `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1'}/storage/buckets/${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID || 'nvcbo_bucket'}/files/${item.appwriteId}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || ''}`}
                    preload="metadata"
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                  />
                ) : (
                  <img
                    src={getImageUrl(item.appwriteId)}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={() => {
                      // Gracefully handle 404s if an image file was deleted from the bucket
                      setDynamicMedia(prev => prev.filter(m => m.appwriteId !== item.appwriteId));
                    }}
                  />
                )}

                {/* Dark Matte Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Video Play Icon Overlay */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 text-white flex items-center justify-center backdrop-blur-md shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Caption Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-3 backdrop-blur-md border border-white/10">
                    {item.category.replace('_', ' ')}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body text-lg font-medium">No media found for this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: Lightbox / Media Viewer Overlay Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity duration-300 opacity-100 ease-out p-4 md:p-8">
          
          {/* Close Button */}
          <button 
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-colors border border-white/20 z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {lightboxItem.type === 'video' && lightboxItem.videoUrl ? (
              <div className="w-full aspect-video bg-black rounded-t-2xl overflow-hidden flex items-center justify-center">
                <video 
                  src={lightboxItem.videoUrl} 
                  controls 
                  autoPlay 
                  playsInline
                  className="w-full h-full max-h-[75vh] object-contain focus:outline-none"
                >
                  Your browser does not support HTML5 video playback.
                </video>
              </div>
            ) : (
              <div className="relative w-full max-h-[70vh] flex items-center justify-center bg-black rounded-t-2xl overflow-hidden">
                <img 
                  src={getImageUrl(lightboxItem.appwriteId)} 
                  alt={lightboxItem.title} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            
            {/* Lightbox Caption Bar */}
            <div className="w-full bg-neutral-light p-6 md:p-8 border-t border-muted">
              <span className="text-primary text-xs font-bold tracking-widest uppercase block mb-2">
                {lightboxItem.category.replace('_', ' ')}
              </span>
              <h3 className="text-2xl font-bold text-heading mb-3">
                {lightboxItem.title}
              </h3>
              <p className="text-body leading-relaxed max-w-4xl">
                {lightboxItem.caption}
              </p>
            </div>
          </div>

        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
