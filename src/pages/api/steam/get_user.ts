import type { NextApiRequest, NextApiResponse } from 'next';
import { Steam } from '@/constants/credentials';

type Data = {
  user: {
    personaState: string,
    gameextrainfo: string,
    personaName: string,
    profileUrl: string,
    avatar: string,
    lastLogOff: number,
  },
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {  
  switch(req.method) {
    case 'GET':
      try {
        const player = await getPlayerSummaries();
        const level = await getSteamLevel();
        const badge = await getBadge();
        const personaState = player.response.players[0].personastate;
        const gameextrainfo = player.response.players[0].gameextrainfo ?? "";      
        const personaName = player.response.players[0].personaname;
        const profileUrl = player.response.players[0].profileurl;
        const avatar = player.response.players[0].avatarfull;
        const lastLogOff = player.response.players[0].lastlogoff;
        const user = {
          level,
          badge,
          gameextrainfo,
          personaState,
          personaName,
          profileUrl,
          avatar,
          lastLogOff,
        }
        res.status(200).json({
          user,
          error: ''
        });
      } catch (err) {
        res.status(500).send({
          error: `${err}`,
          user: {
            personaState: '',
            gameextrainfo: '',
            personaName: '',
            profileUrl: '',
            avatar: '',
            lastLogOff: 0,
          }
        })
      }           
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

async function getBadge() {
  const res = await fetch(`https://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam.key}&steamid=${Steam.id}`, { method: "GET" });
  const data = await res.json();
  return data.response;
}