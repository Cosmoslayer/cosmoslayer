export interface AchievementInterface {
  totalAchieved: number,
  totalAchievements: number,
  percentage: number,
};

export interface GameInterface {
  appid: number,
  name: string,
  playtime_2weeks: number,
  playtime_forever: number,
  img_icon_url: string,
  achievements?: AchievementInterface,
};

export interface ImageInterface {
  fullsize: string,
  alt: string,
  aspectRatio: {
    height: number,
    width: number,
  },
};

export interface PortfolioImageInterface {
  asset_id: string,
  height: number,
  width: number,
  secure_url: string,
  context: {
    custom: {
      alt: string
    },
  },
};

export interface PostInterface {
  post: {    
    cid: string,
    embed: {
      images: Array<ImageInterface>
    },
    record: {
      text: string,
      createdAt: string,
      embed: {
        images: {
          alt: string,
        },
      },
    },
  },
};

export interface SkeletonInterface {
  id: number,
};
