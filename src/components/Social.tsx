import Link from 'next/link';

import { Box } from '@mui/material';
import { Twitter, Email, GitHub, YouTube } from '@mui/icons-material';

export default function Social() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,          
      }}
    >
      <Link href='https://github.com/Cosmoslayer' target='_blank'>
        <GitHub 
          color='disabled'
          fontSize='large'
          sx={{
            "&:hover": {
              color: 'rgb(0, 0, 0)'
            }
          }}
        />
      </Link>
      <Link href='https://twitter.com/Cosmoslayer' target='_blank'>
        <Twitter 
          color='disabled'
          fontSize='large'
          sx={{
            "&:hover": {
              color: 'rgb(29, 161, 242)'
            }
          }}
        />
      </Link>
      <Link href='https://www.youtube.com/Cosmoslayer' target='_blank'>
        <YouTube 
          color='disabled'
          fontSize='large'
          sx={{
            "&:hover": {
              color: 'rgb(255, 0, 0)'
            }
          }}
        />
      </Link>
      <Link href='mailto:admin@cosmoslayer.name'>
        <Email
          color='disabled'
          fontSize='large'
          sx={{
            "&:hover": {
              color: 'rgb(234, 67, 53)'
            }
          }}
        />
      </Link>
    </Box>
  )
}