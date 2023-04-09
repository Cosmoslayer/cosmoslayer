export const Steam = {
  id: process.env.STEAM_ID,
  key: process.env.STEAM_WEB_API_KEY,
};

export const Twitter = {
  username: process.env.TWITTER_USERNAME,
  consumer: {
    key: process.env.TWITTER_API_KEY,
    secret: process.env.TWITTER_API_KEY_SECRET,
  }
}
