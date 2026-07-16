"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryAsset {
  src: string;
  alt: string;
  caption: string;
}

export default function FarmGallery({ assets }: { assets: GalleryAsset[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryAsset | null>(null);

  return (
    <>
      <div className="mb-8">
        <h3 className="text-3xl font-black text-brand-espresso">Flagship Production Gallery</h3>
        <p className="text-brand-espresso/60 text-sm font-medium mt-2">Visualizing our day-to-day operations and impact.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {assets.map((asset, index) => (
           <div 
             key={index} 
             onClick={() => setSelectedImage(asset)}
             className="group relative overflow-hidden rounded-2xl bg-brand-cream border border-brand-espresso/10 aspect-[4/3] flex flex-col cursor-pointer bento-card p-2"
           >
             <div className="flex-1 w-full relative rounded-xl overflow-hidden bg-brand-espresso/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                <img src={asset.src} alt={asset.alt} className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <div className="pt-3 pb-1 px-1 flex justify-between items-start">
               <p className="text-xs font-bold text-brand-espresso/80 leading-snug">{asset.caption}</p>
             </div>
           </div>
        ))}
      </div>

      {/* Mobile-first Responsive Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-espresso/95 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-5xl max-h-[100dvh] flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-brand-espresso flex items-center justify-center">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full h-auto max-h-[75vh] object-contain" 
              />
            </div>
            <div className="mt-4 text-center w-full max-w-3xl pb-4">
              <h4 className="text-white font-black text-lg md:text-xl tracking-wide">{selectedImage.alt}</h4>
              <p className="text-white/70 text-sm mt-1">{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
