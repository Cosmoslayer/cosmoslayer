import { NextResponse } from "next/server";

import { Steam } from '@/helpers/credentials';

export async function GET() {
  try {
    const player = await getPlayerSummaries();
    const level = await getSteamLevel();
    const badge = await getBadge();
    const personaState = player.response.players[0].personastate;
    const gameextrainfo = player.response.players[0].gameextrainfo ?? "";      
    const personaName = player.response.players[0].personaname;
    const profileUrl = player.response.players[0].profileurl;
    const avatar = player.response.players[0].avatarfull;
    const user = {
      level,
      badge,
      gameextrainfo,
      personaState,
      personaName,
      profileUrl,
      avatar,
    }
    return NextResponse.json({
      user,
      error: ''
    }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: `${error}`,
      user: {
        personaState: '',
        gameextrainfo: '',
        personaName: '',
        profileUrl: '',
        avatar: '',
      }
    }, {
      status: 500,
    });
  }           
};

async function getPlayerSummaries() {
  const res = await fetch(`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${Steam.key}&steamids=${Steam.id}`,{
    method: "GET",
  });
  const data = await res.json();
  return data;
};

async function getSteamLevel() {
  const res = await fetch(`https://api.steampowered.com/IPlayerService/GetSteamLevel/v1/?key=${Steam.key}&steamid=${Steam.id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data.response.player_level;
};

async function getBadge() {
  const res = await fetch(`https://api.steampowered.com/IPlayerService/GetBadges/v1/?key=${Steam.key}&steamid=${Steam.id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data.response;
};
