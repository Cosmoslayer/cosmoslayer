import type { NextApiRequest, NextApiResponse } from 'next';
import { Steam } from '@/constants/credentials';

type Data = {
  user: {
    personaState: string;
    personaName: string,
    profileUrl: string,
    avatar: string,
    lastLogOff: number,
  }  
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {  
  switch(req.method) {
    case 'GET':
      const player = await getPlayerSummaries();
      const level = await getSteamLevel()
      let personaState = player.response.players[0].personastate;
      switch (personaState) {
        case 0:
          personaState = 'Offline'
          break;
        case 1:
          personaState = 'Online'
          break;
        case 2:
          personaState = 'Busy'
          break;
        case 3:
          personaState = 'Away'
          break;
        case 4:
          personaState = 'Snooze'
          break;
        case 5:
          personaState = 'Looking to trade'
          break;
        case 6:
          personaState = 'Looking to play'
          break;            
      }
    const personaName = player.response.players[0].personaname;
    const profileUrl = player.response.players[0].profileurl;
    const avatar = player.response.players[0].avatar;
    const lastLogOff = player.response.players[0].lastlogoff;
    const user = {
      level,
      personaState,
      personaName,
      profileUrl,
      avatar,
      lastLogOff,
    }
    res.status(200).json({ user });
    break;
  }
}

async function getPlayerSummaries() {
  const res = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${Steam.key}&steamids=${Steam.id}`, { method: "GET" });
  const data = await res.json();
  return data;
}

async function getSteamLevel() {
  const res = await fetch(`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${Steam.key}&steamid=${Steam.id}`, { method: "GET" });
  const data = await res.json();
  return data.response.player_level;
}