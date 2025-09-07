import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { Twitch } from '@/helpers/credentials';

export async function GET() {
  try {
    const stream = await getStream();
    return NextResponse.json({
      stream,
      error: ''
    }, {
      status: 200,
    })
  } catch (error) {
    return NextResponse.json({
      error: `${error}`,
      stream: {}
    }, {
      status: 500,
    })
  }  
};

async function getStream() {  
  const cookieStore = await cookies();

  if (!cookieStore.has('twitch')) {
    await createCookie();
  }

  const validatedToken = await validateToken();
  
  if (validatedToken.status === 401) {
    cookieStore.delete('twitch');
    await createCookie();
  }

  const res = await fetch(`https://api.twitch.tv/helix/streams?user_id=${Twitch.user.id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${cookieStore.get('twitch')?.value}`,
      'Client-Id': `${Twitch.client.id}`,
    },
  })
  const data = await res.json();
  return data;
};

async function getAccessToken() {
  const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${Twitch.client.id}&client_secret=${Twitch.client.secret}&grant_type=client_credentials`, {
    method: 'POST',
  });
  const data = await res.json();
  if (data.token_type === "bearer") {
    return data;
  };
};

async function createCookie() {
  const cookieStore = await cookies();
  const accessToken = await getAccessToken();
  
  cookieStore.set({
    name: 'twitch',
    value: accessToken.access_token,
    maxAge: accessToken.expires_in,
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

async function validateToken() {
  const cookieStore = await cookies();
 
  const res = await fetch(`https://id.twitch.tv/oauth2/validate`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${cookieStore.get('twitch')?.value}`,
    },
  })
  const data = await res.json();
  return data;
}
