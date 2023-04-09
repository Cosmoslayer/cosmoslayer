import Image from 'next/image';
import User from '@/components/Steam/User';
import ShowError from '@/components/ShowError';
import { Typography, Box, LinearProgress, Card, Skeleton } from '@mui/material';
import { useGetGamesQuery } from '@/store/steamSlice';
import { SportsEsports } from '@mui/icons-material';
import { GameInterface } from '@/helpers/interfaces';

export default function Steam() {
  const { data, isLoading, isSuccess, isError, error } = useGetGamesQuery<any>();
  const skeletonArray = [{ id: 1 }, { id: 2 }, { id: 3 }]
  return (
    <Box
      sx={{
        border: "1px solid black"
      }}
    >
      <User />
      <Box
        sx={{ 
          background: 'linear-gradient(to right, rgb(245,252,255), rgb(219,243,250), rgb(183,233,247), rgb(146,223,243), rgb(122,215,240))',              
          display: 'flex',              
          justifyContent: 'space-between',              
          alignItems: 'center',              
          px: '5px',
        }}
      >
        <Typography variant='h2'>Last Played Games</Typography>  
        <SportsEsports sx={{ fontSize: '60px' }} />  
      </Box>      
      {isLoading && skeletonArray.map((skeleton) => {
        return (
          <Card 
            sx={{
              margin: '2px',
            }}
            key={skeleton.id}
          >
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
                <Skeleton variant="text" sx={{ fontSize: '32px' }} />
                <Skeleton variant="rectangular" width={376} height={69} />
                <Skeleton variant="text" sx={{ fontSize: '24px' }} />
                <Skeleton variant="rectangular" width={376} height={48} />
                <Skeleton variant="text" sx={{ fontSize: '24px' }} />
                <Skeleton variant="rectangular" width={376} height={44} />
            </Box>
          </Card>          
        )
      })}
      {isSuccess && data?.last_games_played.map((game: GameInterface) => {
        return (
          <Card 
            sx={{
              border: '1px solid #517693',
              background: '#60AFFE',
              margin: '2px',
            }}
            key={game.appid}
          >
            <Box
              sx={{
                textAlign: 'center'
              }}
            >
              <Typography sx={{ background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)', fontWeight: 700, mb: "5px" }} variant='h6'>{game.name}</Typography>
              <Image src={`https://steamcdn-a.akamaihd.net/steam/apps/${game.appid}/header.jpg`} alt={game.name} height={69} width={184} />
              <br />
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
            <Box sx={{
              textAlign: 'center',
            }}>
              <Typography sx={{ background: 'linear-gradient(to right, #E6F2FF, #B9DCFF, #8DC5FE, #60AFFE)', fontWeight: 700, mb: "5px" }} variant='body1'>Achievements</Typography>
              <Typography variant='body1'>{game.achievements.totalAchieved} / {game.achievements.totalAchievements}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '85%', mr: 1 }}>
                  <LinearProgress variant="determinate" value={Number(game.achievements.percentage)} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body2" color="text.secondary">{`${game.achievements.percentage}%`}</Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        );
      })}
      {isError && <ShowError error={error.data.error} />}
    </Box>
  );
}
