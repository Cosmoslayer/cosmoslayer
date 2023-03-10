import { useState, useEffect } from 'react';
import Tweet from '@/components/Twitter/Tweet';
import { Typography, Card, Box, Skeleton } from '@mui/material';
import { useGetTimelineQuery } from '@/store/twitterSlice';
import { SkeletonInterface, TweetInterface } from '@/helpers/interfaces';

export default function Twitter() {
  const { data, isLoading, isSuccess, isError, error } = useGetTimelineQuery<any>();
  const [skeletonArray, setSkeletonArray] = useState<Array<SkeletonInterface>>([]);

  useEffect(() => {
    const skeletons = [];
    for (let id = 1; id <= 20; id++) {
      const skeletonObject = {
        id
      }
      skeletons.push(skeletonObject);
    }
    setSkeletonArray(skeletons);
  }, [skeletonArray])
    
  return (
    <>
      {isLoading && skeletonArray.map((skeleton: SkeletonInterface) => {
        return (
          <Card 
            sx={{
              padding: '5px',
              margin: '5px',
              boxShadow: 2,
            }}
            key={skeleton.id}
          >
            <Box
              sx={{ 
                px: '5px' 
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: '24px' }} width='100%' />
              <Skeleton variant="rectangular" width='100%' height={80} />
            </Box>
          </Card>          
        )
      })}
      {isSuccess && data?.tweets.map((tweet: TweetInterface) => {
        return (
          <Card
            sx={{
              border: '2px solid #8B8989',
              padding: '5px',
              margin: '5px',
              boxShadow: 2,
            }}
            key={tweet.id}
          >
            {Tweet(tweet)}
          </Card>
        )
      })}
      {isError && <Typography>An error occured! Error: {error}</Typography>}
    </>
  )
}