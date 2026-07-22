"use client";
import { useState, useEffect } from "react";
import CircleGalleryModal from "../../components/CircleGalleryModal";

export default function CircleKeepersGallery() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/gallery-images')
      .then((res) => res.json())
      .then((imgs) => {
        const srcs = imgs.map((img: any) => img.src).slice(0, 6);
        setGalleryImages(srcs);
      })
      .catch((e) => {
        console.error('Failed to load gallery images', e);
      });
  }, []);

  return <CircleGalleryModal images={galleryImages} />;
}
