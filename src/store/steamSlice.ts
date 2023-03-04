import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const steamSlice = createApi({
  reducerPath: 'steamSlice',
  baseQuery: fetchBaseQuery({    
    baseUrl: process.env.API_BASE_URL,
  }),
  endpoints: (builder) => ({
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

export const { useGetGamesQuery, useGetUserQuery } = steamSlice;