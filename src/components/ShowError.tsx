import { Box, Typography } from '@mui/material';

export default function ShowError({ error } : { error: string }) {  
  return (
    <Box
      sx={{
        padding: '5px',
        textAlign: 'center'
      }}
    >
      <Typography>An error occured! Please try again later!</Typography>     
      <Box
        sx={{
          margin: '5px',
          padding: '2px',
          border: '1px solid black',
          color: 'black',
          borderRadius: '10px',
          boxShadow: '2px 2px #DC1C13',
          backgroundColor: '#EA4C46'
        }}
      >
        <Typography>{error}</Typography>
      </Box>     
    </Box>    
  )  
}
