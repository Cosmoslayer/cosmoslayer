import { NextResponse } from "next/server";

import { Cloudinary } from "@/helpers/credentials";

export async function GET() {
  try {
    const images = await getImages();    
    return NextResponse.json({
      images,
      error: ''
    }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: `${error}`,
      images: []
    }, {
      status: 500,
    })
  }      
};

async function getImages() {
  const res = await fetch(`https://api.cloudinary.com/v1_1/${Cloudinary.name}/resources/by_asset_folder?asset_folder=${Cloudinary.folder}&tags=true&metadata=true`, {
    method: 'GET',
    headers: {
      'Authorization': `Basic ${Buffer.from(Cloudinary.key + ':' + Cloudinary.secret).toString('base64')}`
    }
  });
  const response = await res.json();
  return response;
};
  