import { Typography, Box, LinearProgress } from '@mui/material';

import { AchievementInterface } from '@/helpers/interfaces';

export default function Achievements({ achievements } : { achievements: AchievementInterface }) {
  return (
    <>
      <Typography variant='body1'>{achievements.totalAchieved} / {achievements.totalAchievements}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '85%', mr: 1 }}>
          <LinearProgress variant="determinate" value={Number(achievements.percentage)} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${achievements.percentage}%`}</Typography>
        </Box>
      </Box>
    </>
  )
}
