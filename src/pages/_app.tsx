import Steam from '@/components/Steam';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Container, Grid } from '@mui/material';
import { steamSlice } from '@/store/steamSlice'
import { twitterSlice } from '@/store/twitterSlice';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <Container>
      <Header />
      <Grid container>
        <Grid item xl={8} xs={12}>
          <ApiProvider api={twitterSlice}>
            <Component {...pageProps} />
          </ApiProvider>
        </Grid>
        <Grid item xl={4} xs={12}>
          <ApiProvider api={steamSlice}>
            <Steam />
          </ApiProvider>
        </Grid>
      </Grid>
      <Footer />
    </Container>
  );
}
