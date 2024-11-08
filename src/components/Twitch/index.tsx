'use client'

import { useState } from 'react';

import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';

import {
  Button,
  IconButton,
  Snackbar,  
  SnackbarContent
} from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';

import { useGetStreamQuery } from '@/store/apiSlice';

import ShowError from '../ShowError';

export default function Twitch() {

  const { data, isSuccess, isError, error } = useGetStreamQuery<any>();
  
  const [open, setOpen] = useState(true);

  const gameName = data?.stream?.data[0]?.game_name ?? '';
  const viewerCount = data?.stream?.data[0]?.viewer_count ?? 0;
  const message = `Currently streaming ${gameName} with ${viewerCount} viewer(s) on Twitch.`; 
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <>
      <Link href='https://www.twitch.tv/cosmoslayer' target='_blank'>
        <Button
          color="primary"
          size="large"
          onClick={handleClose}
          sx={{
            "&:hover": { 
              background: 'rgb(80, 80, 80)',
            },
          }}
        >
          CLICK HERE TO WATCH
        </Button>
      </Link>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
        sx={{
          "&:hover": { 
            background: 'rgb(80, 80, 80)',
          },
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      {isSuccess && data?.stream?.data[0] && (
        <Snackbar 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open}
          autoHideDuration={10000}
          onClose={handleClose}         
          TransitionComponent={SlideTranstion}
        >
          <SnackbarContent
            message={message}
            action={action}
          />
        </Snackbar>
      )}
      {isError && <ShowError error={error.data.error} />}
    </>
  );
};

function SlideTranstion(props: SlideProps) {
  return <Slide {...props} direction="left" />
};
