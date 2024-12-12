'use client'

import { useEffect, useState } from 'react';

import Link from 'next/link';

import {
  Button,
  IconButton,
  Snackbar,  
  SnackbarContent
} from '@mui/material';
import { Close } from '@mui/icons-material';
import Slide, { SlideProps } from '@mui/material/Slide';

import { pluralize } from '@/helpers/utilities';
import { useGetStreamQuery } from '@/store/apiSlice';
import { globalQueryOptions } from '@/helpers/constants';

import ShowError from '../ShowError';

export default function Twitch() {

  const [open, setOpen] = useState(true);
  const [isNotified, setIsNotified] = useState(false);

  const {
    data,
    error,
    isError,
    isSuccess,
  } = useGetStreamQuery<any>(
    undefined,
    {
      ...globalQueryOptions,
      skip: isNotified,
    }
  );

  const gameName = data?.stream?.data[0]?.game_name ?? '';
  const viewerCount = data?.stream?.data[0]?.viewer_count ?? 0;
  const message = `Currently streaming ${gameName} with ${viewerCount} ${pluralize(viewerCount, 'viewer')} on Twitch.`;
  
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsNotified(true);
    setOpen(false);
  };

  useEffect(() => {
    if (data?.stream.data[0]) {
      setOpen(true);
    }
  }, [data])

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
        <Close fontSize="small" />
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
