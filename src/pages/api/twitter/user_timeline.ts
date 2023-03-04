import type { NextApiRequest, NextApiResponse } from 'next';
import { Twitter } from '@/constants/credentials';

type Data = {
  tweets: Object;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch(req.method) {
    case 'GET':
      const tweets = await getUserTimeline();
      res.status(200).json({ tweets })
      break;
  }
}

async function getUserTimeline() {  
  const bearer = await getBearerToken();
  const res = await fetch(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${Twitter.username}&count=20`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearer}`,
    },
  })
  const data = await res.json();
  return data;
}

async function getBearerToken() {
  const res = await fetch(`https://api.twitter.com/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(`${Twitter.consumer.key}:${Twitter.consumer.secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: 'grant_type=client_credentials',
  });
  const data = await res.json();
  if (data.token_type === "bearer") {
    return data.access_token;
  };
}
