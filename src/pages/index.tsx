import Head from 'next/head';
import Twitter from '@/components/Twitter';
import { Typography, Box, } from '@mui/material';
import { Twitter as TwitterIcon } from '@mui/icons-material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cosmoslayer</title>
        <meta name="description" content="Hardcore Video Gamer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          sx={{
            border: "1px solid black"
          }}
        >
          <Box 
            sx={{ 
              background: 'linear-gradient(to right, rgb(245,252,255), rgb(219,243,250), rgb(183,233,247), rgb(146,223,243), rgb(122,215,240))',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: '5px' 
            }}
          >
            <Typography variant='h2'>Latest tweets</Typography>
            <TwitterIcon sx={{ fontSize: '60px' }} />
          </Box>
          <Twitter />   
        </Box>
      </main>
    </>
  )
}
