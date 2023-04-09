import moment from 'moment';
import { Typography, Box } from '@mui/material';
import { FormatTweet } from '@/helpers/utilities';
import { TweetInterface } from '@/helpers/interfaces';

export default function Quote({ tweet } : { tweet: TweetInterface }) {
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
        <Typography variant='h6'>{FormatTweet(tweet?.text).getText()}</Typography>
        <Typography variant='caption'>{moment(new Date(tweet?.quoted_status?.created_at)).format('MMM E, YYYY')}</Typography>
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
          <Typography fontWeight={700} variant='body2'>{tweet?.quoted_status?.user?.name}</Typography>
          <Typography variant='caption'>{moment(new Date(tweet?.quoted_status?.created_at)).format('MMM E, YYYY')}</Typography>
        </Box>
        <Typography>{FormatTweet(tweet?.quoted_status?.text).getText()}</Typography>
      </Box>
    </Box>
  )
}
