import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { Bluesky } from '@/helpers/credentials';

export async function GET() {
  try {
    const posts = await getPosts()
    return NextResponse.json({
      posts,
      error: ''
    }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: `${error}`,
      posts: []
    }, {
      status: 500,
    })
  }
};

async function getPosts() {
  const cookieStore = await cookies();

  if (!cookieStore.has('bluesky')) {
    const accessJwt = await getAccessJwt();
    cookieStore.set({
      name: 'bluesky',
      value: accessJwt,
      maxAge: 7200,
      path: '/',
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
    });
  }

  const res = await fetch(`https://bsky.social/xrpc/app.bsky.feed.getAuthorFeed?actor=${Bluesky.identifier}&filter=posts_no_replies&limit=20`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${cookieStore.get('bluesky')?.value}`,
      'Content-Type': `application/json`,
    },
  })
  const data = await res.json();
  return data;
};

async function getAccessJwt() {
  const res = await fetch(`https://bsky.social/xrpc/com.atproto.server.createSession`, {
    method: 'POST',
    headers: {
      'Content-Type': `application/json`,
    },
    body: JSON.stringify({
      "identifier": Bluesky.identifier,
      "password": Bluesky.password
    })
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(data.error);
  }  
  return data.accessJwt;  
};
