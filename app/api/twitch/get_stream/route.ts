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
  const bearer = await getBearerToken();
  const res = await fetch(`https://api.twitch.tv/helix/streams?user_id=${Twitch.user.id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearer}`,
      'Client-Id': `${Twitch.client.id}`,
    },
  })
  const data = await res.json();
  return data;
};

async function getBearerToken() {
  const res = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${Twitch.client.id}&client_secret=${Twitch.client.secret}&grant_type=client_credentials`, {
    method: 'POST',
  });
  const data = await res.json();
  if (data.token_type === "bearer") {
    return data.access_token;
  };
};
