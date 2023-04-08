import Link from 'next/link';
import Status from '@/components/Steam/Status';
import { Typography, Box, Card, Avatar, Skeleton } from '@mui/material';
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
      {isLoading && (
        <Card 
          sx={{
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
              <Skeleton variant="circular" width={56} height={56} />
              <Skeleton variant="text" sx={{ fontSize: '24px', ml: '5px' }} width={200} />
            </Box>
            <Skeleton variant="text" sx={{ fontSize: '20px', ml: '5px' }} width={82} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: '20px', textAlign: 'center' }} width={165} />  
          </Box>        
        </Card>
      )}      
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
            <Status personaState={data?.user?.personaState} gameextrainfo={data?.user?.gameextrainfo} lastLogOff={data?.user?.lastLogOff} />
          </Card>
        </Link>
      )}
      {isError && <Typography>An error occured! Error: {error}</Typography>}
    </Box>
  )
}