import { Box, Typography } from '@mui/material';

import Social from './Social';

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
      <Typography>&copy; Copyright 2023-2024 Cosmoslayer. All rights reserved.</Typography>
      <Social />
    </Box>
  )  
}
