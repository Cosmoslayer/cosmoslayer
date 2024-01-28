import Link from 'next/link';
import moment from 'moment';
import Status from '@/components/Steam/Status';
import ShowError from '@/components/ShowError';

import { useMemo } from 'react';
import { Box, LinearProgress, Typography, Grid, Card, Avatar, Skeleton } from '@mui/material';
import { useGetUserQuery } from '@/store/apiSlice';

export default function Banner() {  
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery<any>();
  const today = moment();
  const steamLevel = data?.user?.badge?.player_level;
  const steamXp = Number(((((data?.user?.badge?.player_xp + data?.user?.badge?.player_xp_needed_to_level_up) - data?.user?.badge?.player_xp_needed_current_level) - data?.user?.badge?.player_xp_needed_to_level_up) / ((data?.user?.badge?.player_xp + data?.user?.badge?.player_xp_needed_to_level_up) - data?.user?.badge?.player_xp_needed_current_level) * 100).toFixed(2));
  const testData = data?.user?.badge?.player_xp_needed_to_level_up;
  
  const dayTest = useMemo(() => {
    const birthday = moment('11-17', 'MM-DD');
    const daysDiff = birthday.diff(today, 'days');
    if (daysDiff === 0) {
      return "Happy Birthday!"
    } else if (daysDiff < 0) {
      return moment(moment(birthday).format('MM-DD-YYYY')).add(1, 'y').diff(today, 'days');
    } else {
      return daysDiff;
    }
  }, []);

  const years = useMemo(() => {
    const birthday = moment('2000-11-17', 'YYYY-MM-DD');
    const years = today.diff(birthday, 'years');
    return years;
  }, [])

  const days = useMemo(() => {
    const birthday = moment('11-17', 'MM-DD');
    let totalDays = 365;
    let days = birthday.diff(today, 'days');
    if (days < 0) {
      days = birthday.add(1, 'y').diff(today, 'days');
      if (moment(moment(birthday).format('MM-DD-YYYY')).isLeapYear()) {
        totalDays = 366;
      }
    }
    const percentage = ((totalDays - days) / totalDays * 100).toFixed(2);
    return percentage;
  }, [])

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xl={4} xs={12}>
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
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Skeleton variant="circular" width={100} height={100} />
                  <Skeleton variant="text" sx={{ fontSize: '32px' }} width={200} />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Skeleton variant="text" sx={{ fontSize: '32px', textAlign: 'center' }} width={180} />  
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
                  textAlign: 'center',
                }}
              >            
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar
                      sx={{
                        height: 100,
                        width: 100,
                      }}
                      alt={data?.user?.personaName}
                      src={data?.user?.avatar}
                    />
                    <Typography variant='h4'>{data?.user?.personaName}</Typography>  
                  </Box>
                </Box>
                <Status personaState={data?.user?.personaState} gameextrainfo={data?.user?.gameextrainfo} lastLogOff={data?.user?.lastLogOff} />
              </Card>
            </Link>
          )}
        </Grid>
        <Grid item xl={8} xs={12}>
          {isLoading && (
            <>
              <Skeleton variant="text" sx={{ fontSize: '32px', textAlign: 'center' }} width={160} />  
              <Box sx={{ width: '100%', mr: 1 }}>
                <Skeleton variant="text" sx={{ fontSize: '16px', textAlign: 'center' }} width={180} />  
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <Skeleton variant="text" sx={{ fontSize: '20px', textAlign: 'center' }} />  
                  </Box>
                </Box>
              </Box>
              <Skeleton variant="text" sx={{ fontSize: '32px', textAlign: 'center' }} width={165} />  
              <Box sx={{ width: '100%', mr: 1 }}>
                <Skeleton variant="text" sx={{ fontSize: '16px', textAlign: 'center' }} width={180} />  
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <Skeleton variant="text" sx={{ fontSize: '20px', textAlign: 'center' }} />  
                  </Box>
                </Box>
              </Box>
            </>
          )} 
          {isSuccess && (
            <>
              <Typography variant="h6">Base Level: {years}</Typography>
              <Box sx={{ width: '100%', mr: 1 }}>
                <Typography>{dayTest} days before level-up!</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress sx={{ height: 10, borderRadius: 90 }} variant="determinate" value={Number(days)} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${days}%`}</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="h6">Steam Level: {steamLevel}</Typography>
              <Box sx={{ width: '100%', mr: 1 }}>
                <Typography>{testData} xp needed before level-up!</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '100%', mr: 1 }}>
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
                      value={steamXp}
                    />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${steamXp}%`}</Typography>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Grid>
        {isError && <ShowError error={error.data.error} />}
      </Grid>
    </>
  )  
}
