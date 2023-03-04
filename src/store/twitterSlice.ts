import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const twitterSlice = createApi({
  reducerPath: 'twitterSlice',
  baseQuery: fetchBaseQuery({    
    baseUrl: process.env.API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTimeline: builder.query<void, void>({
      query: () => ({
        url: 'api/twitter/user_timeline',        
        method: 'GET',        
      })      
    })
  }),  
});

export const { useGetTimelineQuery } = twitterSlice;