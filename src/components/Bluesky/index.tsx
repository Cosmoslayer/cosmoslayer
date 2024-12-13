'use client'

import { useMemo } from 'react';

import {
  Box,
  Card,
  CardContent,
  Skeleton,
} from '@mui/material';

import { useGetPostsQuery } from '@/store/apiSlice';
import { FeedInterface, SkeletonInterface } from '@/helpers/interfaces';

import Post from './Post';
import ShowError from '../ShowError';
import BackgroundWrapper from '../wrapper/BackgroundWrapper';

export default function Bluesky() {
  
  const { data, isSuccess, isLoading, isError, error } = useGetPostsQuery<any>();

  const skeletonArray = useMemo(() => {
    const skeletons = [];
    for (let id = 1; id <= 5; id++) {
      const skeletonObject = {
        id,
      }
      skeletons.push(skeletonObject);
    }
    return skeletons;
  }, []);

  return (
    <BackgroundWrapper
      title='Latest Posts'
    >
      {isLoading && skeletonArray.map((skeleton: SkeletonInterface) => {
        return (
          <Card
            sx={{ 
              marginX: '5px',
              padding: '5px',
              '&:not(:last-child)' : {
                marginBottom: '5px',
              }
            }}
            key={skeleton.id}
          >
            <CardContent sx={{ '&:last-child': { paddingBottom: '16px' } }}>              
              <Box
                display='flex'
                justifyContent='space-between'
                alignItems={{
                  xs: 'center',
                  md: 'normal',
                }}
                marginBottom='5px'
              >
                <Box
                  display='flex'
                  gap={{
                    xs: '15px',
                    md: '40px',
                  }}
                >
                  <Skeleton variant="text" sx={{ fontSize: 20 }} width={35} /> 
                  <Skeleton variant="text" sx={{ fontSize: 20 }} width={35} /> 
                  <Skeleton variant="text" sx={{ fontSize: 20 }} width={35} /> 
                </Box>
                <Skeleton variant="text" sx={{ fontSize: 14 }} width={120} />  
              </Box>
              <Skeleton variant="text" sx={{ fontSize: 21 }} width='100%' />
              <Skeleton variant="text" sx={{ fontSize: 21 }} width='100%' /> 
              <Skeleton variant="text" sx={{ fontSize: 21 }} width='100%' /> 
              <Skeleton variant="text" sx={{ fontSize: 21 }} width='100%' /> 
            </CardContent>
          </Card>
        );
      })}
      {isSuccess && data?.posts.feed.map((feed: FeedInterface) => {        
        return (
          <Post
            key={feed.post.cid}
            embed={feed.post.embed}
            record={feed.post.record}
            replyCount={feed.post.replyCount}
            repostCount={feed.post.repostCount}
            likeCount={feed.post.likeCount}
            viewer={feed.post.viewer}
            author={feed.post.author}
          />
        );
      })}
      {isError && <ShowError error={error.data.error} />}
    </BackgroundWrapper>
  );
};
