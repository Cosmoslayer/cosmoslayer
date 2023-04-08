import moment from 'moment';
import { Typography } from '@mui/material';

export default function PersonaState({
  personaState,
  gameextrainfo,
  lastLogOff
} : {
  personaState: number,
  gameextrainfo: string,
  lastLogOff: number
}) {
  if (gameextrainfo) {
    return <Typography variant='h6'>is playing {gameextrainfo}</Typography>
  }
  else {
    switch (personaState) {
      case 0:
        return <Typography variant='h6'>was last seen {moment.unix(lastLogOff).fromNow()}</Typography>
      case 1:
        return <Typography variant='h6'>is currently Online</Typography>
      case 2:
        return <Typography variant='h6'>is currently Busy</Typography>
      case 3:
        return <Typography variant='h6'>is currently Away</Typography>
      case 4:
        return <Typography variant='h6'>is currently Snoozing</Typography>
      case 5:
        return <Typography variant='h6'>is currently looking to trade</Typography>
      case 6:
        return <Typography variant='h6'>is currently looking to play</Typography>
    }
  }
  return null;
}