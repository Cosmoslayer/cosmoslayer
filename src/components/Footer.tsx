import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { Twitter, Email, GitHub } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        margin: '5px 0px 5px 0px',
        borderTop: '2px solid #D3D3D3',
        borderBottom: '2px solid #D3D3D3',        
      }}
    >
      <Typography>&copy; Copyright 2023 Cosmoslayer. All rights reserved.</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 150,          
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
        <Link href='mailto:admin@cosmoslayer.name'>
          <Email
            color='disabled'
            fontSize='large'
            sx={{
              "&:hover": {
                color: 'rgb(187, 0, 27)'
              }
            }}
          />
        </Link>
      </Box>
    </Box>
  )  
}