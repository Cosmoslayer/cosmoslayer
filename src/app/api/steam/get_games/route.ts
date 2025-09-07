import { NextResponse } from "next/server";

import { Steam } from '@/helpers/credentials';
import { getHours } from "@/helpers/utilities";
import { GameInterface } from "@/helpers/interfaces";

export async function GET() {
  try {
    const games = await getRecentlyPlayedGames();
    let last_games_played: GameInterface[] = [];
    await Promise.all(games.response.games.map(async (games: GameInterface) => {
      const game = {
        appid: games.appid,
        name: games.name,
        playtime_2weeks: +getHours(games.playtime_2weeks).toFixed(1),
        playtime_forever: +getHours(games.playtime_forever).toFixed(1),
        img_icon_url: await getImageIcon(games.appid),
        achievements: await getGameAchievements(games.appid),
      }
      last_games_played.push(game);
    }));
    last_games_played.sort((game1, game2) => (game1.name < game2.name) ? -1 : (game1.name > game2.name) ? 1 : 0);
    return NextResponse.json({
      last_games_played,
      error: ''
    }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      error: `${error}`,
      last_games_played: []
    }, {
      status: 500,
    })
  }      
};

async function getRecentlyPlayedGames() {
  const res = await fetch(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${Steam.key}&steamid=${Steam.id}&format=json`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

async function getGameAchievements(appid: number) {
  const res = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?appid=${appid}&key=${Steam.key}&steamid=${Steam.id}`, {
    method: "GET",
  });
  const gameAchievements = await res.json();
  if (gameAchievements.playerstats.error || !gameAchievements.playerstats.achievements) {
    return undefined;
  };
  const totalAchieved = gameAchievements.playerstats.achievements.filter((game: { achieved: number }) => game.achieved === 1).length;
  const totalAchievements = gameAchievements.playerstats.achievements.length;
  const percentage = +(totalAchieved / totalAchievements * 100).toFixed(2);
  return {
    totalAchieved,
    totalAchievements,
    percentage
  };
};

async function getImageIcon(appid: number) {
  const res = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appid}`, {
    method: "GET",
  });
  const data = await res.json();
  return data[appid].data.header_image;
};
