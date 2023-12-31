import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        padding: '10px',
        margin: '5px 0px 5px 0px',
        borderTop: '2px solid #D3D3D3',
        borderBottom: '2px solid #D3D3D3',        
      }}
    >
      <Typography>&copy; Copyright 2023 Cosmoslayer. All rights reserved.</Typography>
    </Box>
  )  
}
