export interface GameInterface {
  appid: number,
  name: string,
  playtime_2weeks: string,
  playtime_forever: string,
  achievements: any,
};

export interface SkeletonInterface {
  id: number,
};

export interface AchievementInterface {
  totalAchieved: string,
  totalAchievements: string,
  percentage: number,
};
