"use client";
import CircleGalleryModal from "../../components/CircleGalleryModal";

const CIRCLE_KEEPER_IMAGES = [
  "/bb0c6e98-056a-4068-a927-f55471cd8acb.JPG",
  "/c6ca5e19-b149-4367-802d-8bcac72d87f9.JPG",
  "/f2d689e4-ca5c-40d5-a7b3-54aaf7ba1ca7.JPG",
];

export default function CircleKeepersGallery() {
  return <CircleGalleryModal images={CIRCLE_KEEPER_IMAGES} />;
}
