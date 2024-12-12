import Link from 'next/link';

import {
  Avatar,
  Box,
  Card,
  LinearProgress,
  Skeleton,
  Typography,
} from '@mui/material';

import ShowError from '@/components/ShowError';
import TitleWrapper from '@/components/wrapper/TitleWrapper';

import { useGetUserQuery } from '@/store/apiSlice';
import { globalQueryOptions } from '@/helpers/constants';

import Status from '../Status';

export default function Profile() {  
  
  const {
    data,
    error,
    isError,
    isFetching,
    isLoading,
  } = useGetUserQuery<any>(
    undefined,
    globalQueryOptions,
  );

  const badges = data?.user?.badge?.badges?.length;
  const steamLevel = data?.user?.badge?.player_level;
  const nextLevelExp = ((data?.user?.badge?.player_xp + data?.user?.badge?.player_xp_needed_to_level_up) - data?.user?.badge?.player_xp_needed_current_level);
  const currentExp = nextLevelExp - data?.user?.badge?.player_xp_needed_to_level_up;
  const steamExp = Number((currentExp / nextLevelExp * 100).toFixed(2));

  if (isLoading || isFetching) {
    return (
      <Card 
        sx={{
          border: '1px solid #517693',
          background: '#8DB6CD',
          padding: '5px',
          marginX: '5px',
          textAlign: 'center',
        }}
        >
          <Box
            display="flex"
          >
            <Box
              sx={{
                border: "1px solid black",
                borderRight: 0,
                textAlign: "left",
                fontSize: 0,
                width: '66%',
                borderTopLeftRadius: "4px",
              }}
            >                
              <TitleWrapper>
                Username
              </TitleWrapper>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginY: "2px"
                }}
              >
                <Skeleton variant="circular" width={45} height={45} />
                <Skeleton variant="text" sx={{ fontSize: 20 }} width={120} />
              </Box>
            </Box>
          <Box
            sx={{
              border: "1px solid black",
              borderTopRightRadius: "4px",
              textAlign: "left",
              fontSize: 0,
              width: '34%',
            }}
          >                
            <TitleWrapper>
              Badge
            </TitleWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: "10px"
              }}
            >                  
              <Skeleton variant="text" sx={{ fontSize: 20 }} width={35} />                
            </Box>
          </Box>
          </Box>
          <Box
            display="flex"
          >
            <Box
              sx={{
                border: "1px solid black",
                borderTop: 0,
                borderRight: 0,
                textAlign: "left",
                fontSize: 0,
                width: '66%',
              }}
            >                
              <TitleWrapper>
                Experience
              </TitleWrapper>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  marginY: "2px"
                }}
              >
                </Box>                        
                <Box 
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginX: "4px"
                  }}
                >
                  <Skeleton variant="text" sx={{ fontSize: '1rem'}} width={62} />
                  <Skeleton variant="text" sx={{ fontSize: 16 }} width='40%' />
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={46} />
              </Box>
            </Box>
          <Box
            sx={{
              border: "1px solid black",
              borderTop: 0,
              textAlign: "left",
              fontSize: 0,
              width: '34%',
            }}
          >                
            <TitleWrapper>
              Level
            </TitleWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginY: "2px"
              }}
            >                  
              <Skeleton variant="text" sx={{ fontSize: 20 }} width={25} />                  
            </Box>
          </Box>
        </Box>              
        <Box
          sx={{
            border: "1px solid black",
            borderTop: 0,
            textAlign: "left",
            fontSize: 0,
            width: '100%',
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >                
          <TitleWrapper>
            Status
          </TitleWrapper>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              marginY: "2px"
            }}
          >
            <Skeleton variant="circular" width={22} height={22} />
            <Skeleton variant="text" sx={{ fontSize: '1.75rem' }} width={55} />
          </Box>
        </Box>
      </Card>
    )
  }

  if (isError) {
    return <ShowError error={error.data.error} />
  }
  
  return (
    <Link href={data?.user?.profileUrl} target='_blank'>
      <Card 
        sx={{
          border: '1px solid #517693',
          background: '#8DB6CD',
          padding: '5px',
          marginX: '5px',
          textAlign: 'center',
        }}
      >
        <Box
          display="flex"
        >
          
          <Box
            sx={{
              border: "1px solid black",
              borderRight: 0,
              textAlign: "left",
              fontSize: 0,
              width: '66%',
              borderTopLeftRadius: "4px",
            }}
          >                
            <TitleWrapper>
              Username
            </TitleWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginY: "2px"
              }}
            >
              <Avatar
                sx={{
                  height: 45,
                  width: 45,
                }}
                alt={data?.user?.personaName}
                src={data?.user?.avatar}
              />
              <Typography sx={{fontSize: 20}} variant='h4'>{data?.user?.personaName}</Typography>  
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              borderTopRightRadius: "4px",
              textAlign: "left",
              fontSize: 0,
              width: '34%',
            }}
          >                
            <TitleWrapper>
              Badge
            </TitleWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: "10px"
              }}
            >                  
              <Typography sx={{fontSize: 20}} variant='h4'>{badges}</Typography>                    
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
        >
          <Box
            sx={{
              border: "1px solid black",
              borderTop: 0,
              borderRight: 0,
              textAlign: "left",
              fontSize: 0,
              width: '66%',
            }}
          >                
            <TitleWrapper>
              Experience
            </TitleWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                marginY: "2px"
              }}
            >
              </Box>                        
              <Box 
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginX: "4px"
                }}
              >
                <Typography variant="body2">{currentExp} / {nextLevelExp}</Typography>
                <Box sx={{ width: '40%'}}>
                  <LinearProgress 
                    sx={{
                      backgroundColor: 'DarkSeaGreen',
                      height: '10px',
                      borderRadius: '90px',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'green'
                      }
                    }}
                    variant="determinate"
                    value={steamExp}
                  />
                </Box>
                <Box>
                  <Typography variant="body2" color="text.secondary">{`${steamExp}%`}</Typography>
                </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              borderTop: 0,
              textAlign: "left",
              fontSize: 0,
              width: '34%',
            }}
          >                
            <TitleWrapper>
              Level
            </TitleWrapper>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginY: "2px"
              }}
            >                  
              <Typography sx={{fontSize: 20}} variant='h4'>{steamLevel}</Typography>                    
            </Box>
          </Box>
        </Box>            
        <Box
          sx={{
            border: "1px solid black",
            borderTop: 0,
            textAlign: "left",
            fontSize: 0,
            width: '100%',
            borderBottomLeftRadius: "4px",
            borderBottomRightRadius: "4px",
          }}
        >                
          <TitleWrapper>
            Status
          </TitleWrapper>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginY: "2px"
            }}
          >
            <Status personaState={data?.user?.personaState} gameextrainfo={data?.user?.gameextrainfo}/>
          </Box>
        </Box>
      </Card>
    </Link>
  )  
}
