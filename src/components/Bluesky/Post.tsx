import moment from 'moment';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import JsxParser from 'react-jsx-parser';

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@mui/material';
import { RestartAlt } from '@mui/icons-material';

import { replaceFacets } from '@/helpers/utilities';
import { ImageInterface, PostInterface } from '@/helpers/interfaces';

import Interaction from './Interaction';

export default function Post({
  author,
  embed,
  likeCount,
  record,
  replyCount,
  repostCount,
  viewer,
} : 
  PostInterface
) {

  const date = moment(record.createdAt);
  const facets = record.facets;

  let text = record.text;

  if (facets) {
    text = replaceFacets(facets, text);
  }

  return (
    <Card
      sx={{              
        marginX: '5px',
        padding: '5px',
        '&:not(:last-child)' : {
          marginBottom: '5px',
        }
      }}
    >
      {viewer.repost && 
        <>
          <Box
            display='flex'
            alignItems='center'
            padding='16px 0px 5px 13px'
            color='gray'
          >
            <RestartAlt sx={{ fontSize: 20 }} /> 
            <Typography fontWeight={700}>Reposted</Typography>
          </Box>
          <CardHeader
            sx={{
              paddingTop: 0,
              paddingBottom: 0
            }}
            avatar={<Avatar src={author.avatar} />}
            title={author.displayName}
            subheader={`@${author.handle}`}
            titleTypographyProps={{ fontWeight: 600 }}
            subheaderTypographyProps={{ color: 'gray' }}
          />
        </>
      }
      <CardContent sx={{ '&:last-child': { paddingBottom: '16px' } }}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems={{
            xs: 'center',
            md: 'normal',
          }}
          marginBottom='5px'
        >
          <Interaction
            reply={replyCount}
            repost={repostCount}
            like={likeCount}
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 700
            }}
          >
            Posted {date.fromNow()}
          </Typography>
        </Box>           
        <JsxParser
          components={{ Box, Typography }}
          jsx={`<Typography marginBottom='5px'>${text}</Typography>`}
        />
        <CardMedia>
          {embed?.playlist && 
            <Box sx={{ borderRadius: '10px', overflow: 'hidden', }}>
              <ReactPlayer 
                src={embed.playlist}
                playing={false}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                controls
                muted
              />
            </Box>
          }              
          {embed?.images && embed.images.map((image: ImageInterface, index: number) => {
            return (
              <Image
                key={index}
                src={image.fullsize}
                alt={image.alt}
                width={image?.aspectRatio?.width ?? 2000}
                height={image?.aspectRatio?.height ?? 1600}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                }}
                priority
              />
            );
          })}              
        </CardMedia>
      </CardContent>
    </Card>
  );
};
