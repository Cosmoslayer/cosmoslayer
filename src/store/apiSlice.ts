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
    })
  }),  
});

export const { useGetStreamQuery, useGetGamesQuery, useGetUserQuery } = apiSlice;
