import Tweet from '@/components/Twitter/Tweet';
import { Typography, CircularProgress, Card, Box } from '@mui/material'
import { useGetTimelineQuery } from '@/store/twitterSlice'
import { TweetInterface } from '@/helpers/interfaces';

export default function Twitter() {
  const { data, isLoading, isSuccess, isError, error } = useGetTimelineQuery<any>();
  return (
    <>
      {isLoading && <Box sx={{ textAlign: 'center' }}><CircularProgress size='60px' /></Box>}
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