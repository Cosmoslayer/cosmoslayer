import { Box, Typography } from '@mui/material';
import { Circle, SportsEsports } from '@mui/icons-material';

export default function Status({
  personaState,
  gameextrainfo,
} : {
  personaState: number,
  gameextrainfo: string,
}) {
  let status = {
    name: "",
    color: "",
  };

  if (gameextrainfo) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SportsEsports />
        <Typography
          variant='h6'
          align='center'
          marginLeft='2px'
        >
          Playing {gameextrainfo}
        </Typography>
      </Box>
    );
  }

  switch (personaState) {
    case 0:
      status = {name: "Offline", color: "#d32f2f"};
      break;
    case 1:
      status = {name: "Online", color: "#2e7d32"};
      break;   
    case 2:
      status = {name: "Busy", color: "#9c27b0"};
      break;
    case 3:
      status = {name: "Away", color: "#ed6c02"};
      break;
    case 4:
      status = {name: "Snoozing", color: "#0288d1"};
      break;
    case 5:
      status = {name: "Looking to trade", color: "#0288d1"};
      break;
    case 6:
      status = {name: "Looking to play", color: "#0288d1"};
      break;
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: 'center',
      }}
    >
      <Circle
        sx={{
          color: status.color
        }}
      />
      <Typography
        variant='h6'
        marginLeft='2px'
      >
        {status.name}
      </Typography>
    </Box>
  );
}
