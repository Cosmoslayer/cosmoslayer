import Tweet from '@/components/Twitter/Tweet';
import { Typography, Card, Box, Skeleton } from '@mui/material'
import { useGetTimelineQuery } from '@/store/twitterSlice'
import { TweetInterface } from '@/helpers/interfaces';

export default function Twitter() {
  const { data, isLoading, isSuccess, isError, error } = useGetTimelineQuery<any>();
  const skeletonArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  return (
    <>
      {isLoading && skeletonArray.map((skeleton) => {
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