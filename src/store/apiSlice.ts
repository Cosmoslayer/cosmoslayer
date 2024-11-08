import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({    
    baseUrl: process.env.API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getStream: builder.query<void, void>({
      query: () => ({
        url: 'api/twitch/get_stream',        
        method: 'GET',        
      }),      
    }),
    getGames: builder.query<void, void>({
      query: () => ({
        url: 'api/steam/get_games',
        method: 'GET',
      })      
    }),
    getUser: builder.query<void, void>({
      query: () => ({
        url: 'api/steam/get_user',
        method: 'GET',
      })      
    }),
    getPosts: builder.query<void, void>({
      query: () => ({
        url: 'api/bluesky/get_posts',
        method: 'GET',
      })      
    }),
    getImages: builder.query<void, void>({
      query: () => ({
        url: 'api/cloudinary/get_images',
        method: 'GET',
      })      
    })
  }),  
});

export const {
  useGetStreamQuery,
  useGetGamesQuery,
  useGetUserQuery,
  useGetPostsQuery,
  useGetImagesQuery
} = apiSlice;
