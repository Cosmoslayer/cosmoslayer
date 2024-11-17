import moment from 'moment';

import { Typography } from '@mui/material';

import { pluralize } from '@/helpers/utilities';
import { anniversary } from '@/helpers/constants';

export default function History() {
  
  const years = moment().diff(anniversary, 'years');
  const nextAnniversary = anniversary.clone().add(years + 1, 'years');
  const days = Math.ceil(nextAnniversary.diff(moment(), 'days', true));
  const totalDays = nextAnniversary.isLeapYear() ? 366 : 365;

  return (
    <Typography
      fontSize={15}
        sx={{
          textIndent: "20px"
        }}
    >
      Cosmoslayer was first created in Tekken Zaibatsu as a forum user on {anniversary.format('MMMM DD, YYYY')}. It has been being used for {years} years now, and {days > 0 && days < totalDays ? `it is ${days <= 10 ? `only ${days}` : `${days} more`} ${pluralize(days, 'day')} until the next celebration` : 'today we celebrate another year!'}.
      It is used to be a password before finally becoming a username or an in-game name. It is derived from the words "cosmo" and "slayer." Cosmo, used to be an amusement center but is now extinct, is where Cosmoslayer grew up playing arcade games, especially the fighting game genre, and slayer is synonymous with defeating other players.
      Avatar was custom-made by KepneR during the beta days in Perfect World last 2007.
    </Typography>
  )  
}
