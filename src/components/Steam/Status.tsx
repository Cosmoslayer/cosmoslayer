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
    return <Typography variant='h6'>&quot;I am currently playing {gameextrainfo}&ldquo;</Typography>
  }
  else {
    switch (personaState) {
      case 0:
        return <Typography variant='h6'>&quot;I was last seen {moment.unix(lastLogOff).fromNow()}&ldquo;</Typography>
      case 1:
        return <Typography variant='h6'>&quot;I am currently Online&ldquo;</Typography>
      case 2:
        return <Typography variant='h6'>&quot;I am currently Busy&ldquo;</Typography>
      case 3:
        return <Typography variant='h6'>&quot;I am currently Away&ldquo;</Typography>
      case 4:
        return <Typography variant='h6'>&quot;I am currently Snoozing&ldquo;</Typography>
      case 5:
        return <Typography variant='h6'>&quot;I am currently looking to trade&ldquo;</Typography>
      case 6:
        return <Typography variant='h6'>&quot;I am currently looking to play&ldquo;</Typography>
    }
  }
  return null;
}
