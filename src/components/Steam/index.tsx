import Image from 'next/image';
import ShowError from '@/components/ShowError';
import Achievements from '@/components/Steam/Achievements';

import { Typography, Box, Card, Grid } from '@mui/material';
import { useGetGamesQuery } from '@/store/steamSlice';
import { GameInterface } from '@/helpers/interfaces';

export default function Steam() {
  const { data, isSuccess, isError, error } = useGetGamesQuery<any>();
  return (
    <Box>
      <Grid container>
        {isSuccess && data?.last_games_played.map((game: GameInterface) => {
          return (
            <Grid item xl={4} xs={12}>              
              <Card 
                sx={{
                  border: '1px solid #517693',
                  background: '#60AFFE',
                  margin: '20px',
                  height: '90%'
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
                  {game.achievements === "None" ? (
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
            </Grid>
          );
        })}
      </Grid>
      {isError && <ShowError error={error.data.error} />}
    </Box>
  );
}
