'use client'

import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid2 as Grid
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import { apiSlice } from '@/store/apiSlice';

import Steam from './Steam';
import Footer from './Footer';
import Header from './Header';
import Twitch from './Twitch';
import Profile from './Steam/Profile';
import BackgroundWrapper from './wrapper/BackgroundWrapper';

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isMedium, setIsMedium] = useState(true);

  useEffect(() => {
    setIsMedium(window.innerWidth >= 900)
  }, []);

  return (
    <Container>
      <ApiProvider api={apiSlice}>
        <Header />
        <main>
          <Grid
            container
            border='1px solid black'
            padding='0'
            boxShadow='5px 5px lightgray'
            marginBottom='10px'
          >
            <Grid
              size={{
                xs: 12,
                md: 8
              }}
            >              
              {children}
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 4
              }}
            >
              <Accordion
                expanded={isMedium}
                slotProps={{
                  transition: { unmountOnExit: true },
                  heading: {
                    component: 'h4'
                  }
                }}
                onChange={() => setIsMedium(!isMedium)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="steam-content"
                  id="steam-header"
                  sx={{
                    fontFamily: 'Roboto',
                    fontSize: 28,
                    fontWeight: 700,
                    color: 'white',
                    borderRadius: "4px",
                    backgroundColor: 'SteelBlue',
                    '& .MuiAccordionSummary-content': {
                      justifyContent: 'center'
                    }
                  }}
                >
                  Steam
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: 0
                  }}
                >
                  <BackgroundWrapper
                    title='Profile'
                  >
                    <Profile />
                  </BackgroundWrapper>
                  <BackgroundWrapper
                    title='Last Played Games'
                  >
                    <Steam />
                  </BackgroundWrapper>
                </AccordionDetails>
              </Accordion>            
            </Grid>
          </Grid>
        </main>
        <footer>
          <Footer />
          <Twitch />
        </footer>
      </ApiProvider>
    </Container>   
  )
}
