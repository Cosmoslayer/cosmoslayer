export const Bluesky = { 
  identifier: process.env.BLUESKY_IDENTIFIER,
  password: process.env.BLUESKY_PASSWORD,
};

export const Cloudinary = { 
  name: process.env.CLOUDINARY_CLOUD_NAME,
  key: process.env.CLOUDINARY_API_KEY,
  secret: process.env.CLOUDINARY_API_SECRET,
  folder: process.env.CLOUDINARY_FOLDER,
};

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
