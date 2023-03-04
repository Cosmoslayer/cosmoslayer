export interface TweetInterface {
  id: number,
  text: string,
  created_at: string,
  user: {
    name: string,
  }
  retweeted_status: {
    text: string,
    user: {
      name: string,
    },
    created_at: string,
  },
  quoted_status: {
    text: string,
    user: {
      name: string,
    },
    created_at: string,
  }
};

export interface GameInterface {
  appid: number,
  name: string,
  playtime_2weeks: string,
  playtime_forever: string,
  achievements: {
    totalAchieved: string,
    totalAchievements: string,
    percentage: number,
  }
};
