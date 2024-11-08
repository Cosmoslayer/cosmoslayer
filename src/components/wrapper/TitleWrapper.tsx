import { Typography } from "@mui/material"

export default function TitleWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (    
    <Typography
      sx={{
        color: "white",
        fontFamily: "Verdana",
        fontSize: 10,
        display: "inline-block",
        backgroundColor: "black",
        fontWeight: 700,
        padding: "4px",
        borderBottomRightRadius: "4px",
      }}
    >
      {children}
    </Typography>
  )
}
