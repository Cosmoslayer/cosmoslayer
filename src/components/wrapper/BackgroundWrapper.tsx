import { Box, Typography } from "@mui/material"

export default function BackgroundWrapper({
  title,
  children,
}: {
  title: string,
  children: React.ReactNode
}) {
  return (    
    <Box
      sx={{
        paddingY: '6px',
        margin: 1,
        backgroundColor: 'DodgerBlue',
        borderRadius: "4px"
      }}
    >
      <Typography
        variant="h2"
        sx={{
          width: "100%",
          color: 'Azure',
          padding: 1,
          fontFamily: 'Roboto',
          fontSize: 16,
          fontWeight: 700,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>                  
  )
}
