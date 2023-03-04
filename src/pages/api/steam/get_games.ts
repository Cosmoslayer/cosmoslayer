import type { NextApiRequest, NextApiResponse } from 'next';
import { Steam } from '@/constants/credentials';

type Data = {
  last_games_played: Array<Object>;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {  
  switch(req.method) {
    case 'GET':
      const games = await getRecentlyPlayedGames();
      let last_games_played: any[] = [];
      await Promise.all(games.response.games.map(async (games: any) => {
        const game = {
          appid: games.appid,
          name: games.name,
          playtime_2weeks: getHours(games.playtime_2weeks).toFixed(1),
          playtime_forever: getHours(games.playtime_forever).toFixed(1),
          img_icon_url: games.img_icon_url,
          achievements: await getGameAchievements(games.appid),
        }
        last_games_played.push(game);
      }));
      last_games_played.sort((game1, game2) => (game1.name < game2.name) ? -1 : (game1.name > game2.name) ? 1 : 0);
      res.status(200).json({ last_games_played });
      break;
  }
}

async function getRecentlyPlayedGames() {
  const res = await fetch(`http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${Steam.key}&steamid=${Steam.id}&format=json`, { method: "GET" });
  const data = await res.json();
  return data;
}

async function getGameAchievements(appid: number) {
  const res = await fetch(`http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?appid=${appid}&key=${Steam.key}&steamid=${Steam.id}`, { method: "GET" });
  const gameAchievements = await res.json();
  const totalAchieved = gameAchievements.playerstats.achievements.filter((game: any) => game.achieved === 1).length;
  const totalAchievements = gameAchievements.playerstats.achievements.length;
  const percentage = (totalAchieved / totalAchievements * 100).toFixed(2);
  return {
    totalAchieved,
    totalAchievements,
    percentage
  };
}

function getHours(minutes: number) {
  return minutes / 60;
}