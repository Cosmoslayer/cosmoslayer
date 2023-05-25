import moment from 'moment';
import { FormatTweet } from '@/helpers/utilities';
import { TweetInterface } from '@/helpers/interfaces';
import { Typography, Box } from '@mui/material';

export default function Retweeted({ tweet } : { tweet: TweetInterface }) {
  return (
    <Box>
      <Box
        sx={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '5px' 
        }}
      >
        <Typography variant='h6'>{tweet?.user?.name} retweeted a post from {tweet?.retweeted_status?.user?.name}</Typography>
        <Typography variant='caption'>{moment(new Date(tweet?.retweeted_status?.created_at)).format('MMM D, YYYY')}</Typography>
      </Box>      
      <Box
        sx={{
          border: '2px solid black',
          borderRadius: '10px',
          padding: '5px',
          margin: '5px'
        }}                
      >
        <Box
          sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '5px' 
          }}
        >
          <Typography fontWeight={700} variant='body2'>{tweet?.retweeted_status?.user?.name}</Typography>
          <Typography variant='caption'>{moment(new Date(tweet?.retweeted_status?.created_at)).format('MMM D, YYYY')}</Typography>
        </Box>
        <Typography>{FormatTweet(tweet?.retweeted_status.text).getText()}</Typography>
      </Box>
    </Box>
  )
}
