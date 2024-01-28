import type { NextApiRequest, NextApiResponse } from 'next';
import { Twitch } from '@/helpers/credentials';

type Data = {
  stream: Object,
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch(req.method) {
    case 'GET':
      try {
        const stream = await getStream();
        res.status(200).json({
          stream,
          error: ''
        })
      } catch (err) {
        res.status(500).send({
          error: `${err}`,
          stream: {}
        })
      }      
    break;
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
