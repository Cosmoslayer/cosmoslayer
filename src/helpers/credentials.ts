export const Steam = {
  id: process.env.STEAM_ID,
  key: process.env.STEAM_WEB_API_KEY,
};

export const Twitch = {
  user: {
    id: process.env.TWITCH_USER_ID,
  },
  client: {
    id: process.env.TWITCH_CLIENT_ID,
    secret: process.env.TWITCH_CLIENT_SECRET,
  }
};
