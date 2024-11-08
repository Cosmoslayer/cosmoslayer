'use client'

import { useMemo } from 'react';

import moment from 'moment';
import Image from 'next/image';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography
} from '@mui/material';

import { useGetPostsQuery } from '@/store/apiSlice';
import { ImageInterface, PostInterface, SkeletonInterface } from '@/helpers/interfaces';

import ShowError from '../ShowError';
import BackgroundWrapper from '../wrapper/BackgroundWrapper';

export default function Bluesky() {
  
  const { data, isSuccess, isLoading, isError, error } = useGetPostsQuery<any>();

  const skeletonArray = useMemo(() => {
    const skeletons = [];
    for (let id = 1; id <= 3; id++) {
      const skeletonObject = {
        id
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
            <CardContent>              
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'right',
                  fontSize: 12,
                  fontWeight: 700
                }}
              >
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
      {isSuccess && data?.posts.feed?.map((post: PostInterface) => {
        const date = moment(post.post.record.createdAt);
        return (
          <Card
            key={post.post.cid}
            sx={{              
              marginX: '5px',
              padding: '5px',
              '&:not(:last-child)' : {
                marginBottom: '5px',
              }
            }}
          >
            <CardContent>              
              <Typography
                align='right'
                sx={{
                  fontSize: 12,
                  fontWeight: 700
                }}
              >
                Posted {date.fromNow()}
              </Typography>
              <Typography>{post.post.record.text}</Typography>
              <CardMedia>
              {post.post.embed.images && post.post.embed.images.map((image: ImageInterface, index: number) => {
                return (
                  <Image
                    key={index}
                    src={image.fullsize}
                    alt={image.alt}
                    width={image.aspectRatio.width}
                    height={image.aspectRatio.height}
                    style={{
                      width: '100%',
                      height: 'auto'
                    }}
                    priority
                  />
                );
              })}              
              </CardMedia>
            </CardContent>
          </Card>
        );
      })}
      {isError && <ShowError error={error.data.error} />}
    </BackgroundWrapper>
  );
};
