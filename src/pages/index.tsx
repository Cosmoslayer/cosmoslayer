import Head from 'next/head';
import Steam from '@/components/Steam';
import Social from '@/components/Social';
import Footer from '@/components/Footer';
import Profile from '@/components/Profile';
import History from '@/components/History';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

export default function Home() {
  const [expanded, setExpanded] = useState<string | false>('panel1');
  const items = [
    {
      name: "Profile",
      menu: <Profile />
    },
    {
      name: "History",
      menu: <History />
    },
    {
      name: "Social",
      menu: <Social />
    },
    {
      name: "Last Played Games",
      menu: <Steam />
    },
  ]
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Head>
        <title>Cosmoslayer</title>
        <meta name="description" content="Hardcore Video Gamer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>        
        {items.map((item, index) => {
          const currentPanel = "panel".concat((index + 1).toString());
          return (
            <Accordion
              key={index}
              expanded={expanded === currentPanel}
              onChange={handleChange(currentPanel)}
              sx={{
                border: "1px solid black",
              }}             
            >
              <AccordionSummary            
                expandIcon={<ExpandMoreIcon />}
                aria-controls={currentPanel.concat("d-content")}
                id={currentPanel.concat("d-header")}
                sx={{
                  background: "linear-gradient(to right, rgb(245,252,255), rgb(219,243,250), rgb(183,233,247), rgb(146,223,243), rgb(122,215,240))",
                }}
              >
                <Typography
                  fontWeight={700}
                >
                  {item.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.menu}
              </AccordionDetails>
            </Accordion>
          );           
        })}
        <Footer />
      </main>
    </>
  )
}
