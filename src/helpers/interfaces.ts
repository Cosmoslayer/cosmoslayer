export interface AchievementInterface {
  totalAchieved: number,
  totalAchievements: number,
  percentage: number,
};

export interface FeedInterface {
  post: PostInterface,
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
  aspectRatio?: {
    height: number,
    width: number,
  },
};

export interface IndexInterface {
  index: {
    byteEnd: number;
    byteStart: number,
  },
};

export interface InteractionInterface {
  reply: number,
  repost: number,
  like: number,
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
  cid?: string,
  embed?: {
    images: Array<ImageInterface>
  },
  record: {
    text: string,
    createdAt: string,
    facets?: Array<IndexInterface>,
  },
  replyCount: number,
  repostCount: number,
  likeCount: number,
  viewer: {
    repost?: string,
  },
  author: {
    avatar: string,
    displayName: string,
    handle: string,
  },
};

export interface SkeletonInterface {
  id: number,
};
