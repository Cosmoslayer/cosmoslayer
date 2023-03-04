import Link from 'next/link';
import { Typography, Box, Card, CircularProgress, Avatar } from '@mui/material';
import { useGetUserQuery } from '@/store/steamSlice';
import { Report } from '@mui/icons-material';

export default function User() {
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery<any>();
  return (
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
          px: '5px',
        }}
      >
        <Typography variant='h2'>Steam Status</Typography>  
        <Report sx={{ fontSize: '60px' }} />  
      </Box>
      {isLoading && <Box sx={{ textAlign: 'center' }}><CircularProgress size='60px' /></Box>}
      {isSuccess && (
        <Link href={data?.user?.profileUrl} target='_blank'>
          <Card 
            sx={{
              border: '1px solid #517693',
              background: '#8DB6CD',
              margin: '2px',
              padding: '5px',
              textAlign: 'center'
            }}
          >            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{
                    height: 56,
                    width: 56,
                  }}
                  alt={data?.user?.personaName}
                  src={data?.user?.avatar}
                />
                <Typography ml='5px' variant='h5'>{data?.user?.personaName}</Typography>  
              </Box>
              <Typography ml='5px' variant='h6'>Level: {data?.user?.level}</Typography>  
            </Box>
            <Typography variant='h6'>is currently {data?.user?.personaState}</Typography> 
          </Card>
        </Link>
      )}
      {isError && <Typography>An error occured! Error: {error}</Typography>}
    </Box>
  )
}