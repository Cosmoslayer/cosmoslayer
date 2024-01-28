import { apiSlice } from '@/store/apiSlice';
import { Container } from '@mui/material';
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
      <ApiProvider api={apiSlice}>
        <Component {...pageProps} />
      </ApiProvider>
    </Container>
  );
}
