import { useMemo } from 'react';

import Image from 'next/image';

import {
  Box,
  Card,
  Skeleton,
  Typography,
} from '@mui/material';

import { useGetGamesQuery } from '@/store/apiSlice';
import { GameInterface, SkeletonInterface } from '@/helpers/interfaces';

import ShowError from '../ShowError';
import Achievements from './Achievements';

export default function Steam() {

  const { data, isSuccess, isLoading, isError, error } = useGetGamesQuery<any>();

  const skeletonArray = useMemo(() => {
    const skeletons = [];
    for (let id = 1; id <= 5; id++) {
      const skeletonObject = {
        id
      }
      skeletons.push(skeletonObject);
    }
    return skeletons;
  }, []);

  return (
    <>      
      {isLoading && skeletonArray.map((skeleton: SkeletonInterface) => {
        return (
          <Card
            sx={{
              border: '1px solid #517693',
              background: '#60AFFE',
              marginX: '5px',
              height: '90%',
              '&:not(:last-child)' : {
                marginBottom: '5px',
              }
            }}
            key={skeleton.id}
          >
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)',
                  mb: "5px"
                }}
              >
                <Skeleton sx={{ fontSize: 28, fontWeight: 700 }} variant="text" width={140} />
              </Box>              
              <Skeleton
                style={{
                  display: 'flex',
                  justifySelf: 'center',
                  marginBottom: '4px'
                }}
                variant="rectangular"
                width={184}
                height={69}
              />
              <Typography sx={{ background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)', fontWeight: 700, mb: "5px" }} variant='body1'>Playtime</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <Typography fontWeight={600}>2 weeks</Typography>
                <Skeleton variant="text" sx={{ fontSize: 20.8 }} width={56} />
              </Box>
              <Box>
                <Typography fontWeight={600}>All time</Typography>
                <Skeleton variant="text" sx={{ fontSize: 20.8 }} width={56} />
              </Box>
            </Box>            
            <Box 
              sx={{
                textAlign: 'center',
              }}
            >
              <Typography 
                sx={{ 
                  background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)',
                  fontWeight: 700,
                  mb: "5px"
                }}
                variant='body1'
              >
                Achievements
              </Typography>
              <Skeleton 
                variant="text"
                sx={{
                  display: 'flex',
                  justifySelf: 'center',
                  fontSize: 20
                }}
                width={50}
              /> 
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Skeleton variant="rectangular" width='85%' height={5} sx={{ borderRadius: '45px', marginRight: 1}} />
                <Skeleton variant="text" sx={{ fontSize: 18.5 }} width={45} />    
              </Box>              
            </Box>
          </Card>
          );
        })}
        {isSuccess && data?.last_games_played.map((game: GameInterface) => {
          return (            
            <Card
              key={game.appid}
              sx={{
                border: '1px solid #517693',
                background: '#60AFFE',
                marginX: '5px',
                height: '90%',
                '&:not(:last-child)' : {
                  marginBottom: '5px',
                }
              }}
            >
              <Box
                sx={{
                  textAlign: 'center'
                }}
              >
                <Typography sx={{ background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)', fontWeight: 700, mb: "5px" }} variant='h6'>{game.name}</Typography>
                <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`} alt={game.name} height={69} width={184} priority />
                <Typography sx={{ background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)', fontWeight: 700, mb: "5px" }} variant='body1'>Playtime</Typography>
              </Box>
                <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    textAlign: 'center'
                  }}
                >
                  <Typography fontWeight={600}>2 weeks</Typography>
                  <Typography variant='body1'>{game.playtime_2weeks} hrs.</Typography>
                </Box>
                <Box>
                  <Typography fontWeight={600}>All time</Typography>
                  <Typography variant='body1'>{game.playtime_forever} hrs.</Typography>
                </Box>
              </Box>            
              <Box 
                sx={{
                  textAlign: 'center',
                }}
              >
                <Typography 
                  sx={{ 
                    background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)',
                    fontWeight: 700,
                    mb: "5px"
                  }}
                  variant='body1'
                >
                  Achievements
                </Typography>
                {game.achievements === undefined ? (
                  <Typography 
                    variant='body1'
                  >
                    No achievements!
                  </Typography>              
                ) : (
                  <Achievements achievements={game.achievements} />
                )}
              </Box> 
            </Card>
          );
        })}
      {isError && <ShowError error={error.data.error} />}
    </>
  );
}
