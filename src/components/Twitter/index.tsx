import { useMemo } from 'react';
import Tweet from '@/components/Twitter/Tweet';
import ShowError from '@/components/ShowError';
import { Card, Box, Skeleton } from '@mui/material';
import { useGetTimelineQuery } from '@/store/twitterSlice';
import { SkeletonInterface, TweetInterface } from '@/helpers/interfaces';

export default function Twitter() {
  const { data, isLoading, isSuccess, isError, error } = useGetTimelineQuery<any>();

  const skeletonArray = useMemo(() => {
    const skeletons = [];
    for (let id = 1; id <= 20; id++) {
      const skeletonObject = {
        id
      }
      skeletons.push(skeletonObject);
    }
    return skeletons;
  }, [])
    
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
      {isError && <ShowError error={error.data.error} />}
    </>
  )
}
