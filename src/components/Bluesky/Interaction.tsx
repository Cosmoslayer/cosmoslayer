import {
  ChatBubbleOutline,
  FavoriteBorder,
  RestartAlt
} from '@mui/icons-material';
import { Box, Typography } from "@mui/material";

import { InteractionInterface } from "@/helpers/interfaces";

export default function Interaction({
  reply,
  repost,
  like
} : 
  InteractionInterface
) {
  return (
    <Box
      display='flex'
      gap={{
        xs: '15px',
        md: '40px',
      }}
    >
      <Box
        display='flex'
        alignItems='center'
        gap='5px'
      >
        <ChatBubbleOutline sx={{ fontSize: 20 }} /> 
        <Typography>{reply}</Typography>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        gap='5px'
      >
        <RestartAlt sx={{ fontSize: 20 }} /> 
        <Typography>{repost}</Typography>
      </Box>
      <Box
        display='flex'
        alignItems='center'
        gap='5px'
      >
        <FavoriteBorder sx={{ fontSize: 20 }} /> 
        <Typography>{like}</Typography>
      </Box>
    </Box>
  );
};
