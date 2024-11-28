'use client'

import { useState } from 'react';

import Image from 'next/image';

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  List,
  ListItem,
  ListItemText,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconButtonProps } from '@mui/material/IconButton';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import ShowError from '@/components/ShowError';
import BackgroundWrapper from '@/components/wrapper/BackgroundWrapper';

import { rows } from '@/helpers/constants';
import { useGetImagesQuery } from '@/store/apiSlice';
import { PortfolioImageInterface } from '@/helpers/interfaces';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Page() {

  const { data, isLoading, isSuccess, isError, error } = useGetImagesQuery<any>();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <BackgroundWrapper
      title='Projects'
    >
      <Card
        sx={{
          marginX: "5px"
        }}
      >
        <CardHeader
          title="Cosmoslayer"
          subheader="https://www.cosmoslayer.com"
        />
        <CardMedia
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          {isLoading && (
            <ImageList sx={{ width: '95%', height: '100%' }} cols={2}>
              <Skeleton variant="rectangular" animation='wave' width='100%' height={320} />
              <Skeleton variant="rectangular" animation='wave' width='100%' height={320} />
            </ImageList>
          )}
          {isSuccess && (
            <ImageList sx={{ width: '95%', height: '100%' }} cols={2}>
              {data?.images?.resources.map((image: PortfolioImageInterface) => (
                <ImageListItem key={image.asset_id}>
                  <Image 
                    src={image.secure_url}
                    height={image.height}
                    width={image.width}
                    alt={image.context.custom.alt}
                    style={{
                      width: '100%',
                      height: '90%'
                    }}
                    priority
                  />
                  <ImageListItemBar
                    title={image.context.custom.alt}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
          {isError && <ShowError error={error.data.error} />}
        </CardMedia>
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Personal website where it displays latest posts from Bluesky. It also shows the
            latest games recently played on Steam as well as the status and games that are
            currently played. Shows a Material UI Snackbar component notification when
            streaming a game in Twitch.
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: 'flex-end'
          }}
        >
          <Typography
            fontWeight={700}
          >
            {expanded ? 'Less' : 'More'}
          </Typography>   
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <TableContainer
              component={Paper}
              sx={{
                width: 'auto',
              }}
            >
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align='center' colSpan={2}>Technologies Used</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th">
                        {row.name}
                      </TableCell>
                      <TableCell>
                        <List>
                          {row.content.map((content) => (
                            <ListItem key={content} disablePadding>                      
                              <ListItemText
                                primary={content}
                                sx={{
                                  textAlign: 'right'
                                }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Collapse>
      </Card>
    </BackgroundWrapper>
  )
}
