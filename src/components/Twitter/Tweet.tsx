import Retweeted from '@/components/Twitter/Retweeted';
import Quote from '@/components/Twitter/Quote';
import moment from 'moment';
import { Typography, Box } from '@mui/material';
import { FormatTweet } from '@/helpers/utilities';
import { TweetInterface } from '@/helpers/interfaces';

export default function Tweet (tweet: TweetInterface) {
  if (tweet?.quoted_status) {
    return <Quote tweet={tweet} />
  }

  if (tweet?.retweeted_status) {
    return <Retweeted tweet={tweet} />
  }

  return (
    <Box
      sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: '5px' 
      }}
    >
      <Typography variant='h6'>{FormatTweet(tweet?.text).getText()}</Typography>
      <Typography variant='caption'>{moment(new Date(tweet?.created_at)).format('MMM D, YYYY')}</Typography>
    </Box>      
  )
}
