// src/app/api/gallery-images/route.ts
import { NextResponse } from 'next/server';
import { getSpecificBucketImages } from '@/app/lib/getSpecificBucketImages';

export async function GET() {
  try {
    const images = await getSpecificBucketImages();
    return NextResponse.json(images);
  } catch (error) {
    console.error('Failed to fetch gallery images', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
