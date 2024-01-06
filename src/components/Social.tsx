import Link from 'next/link';

import { Box } from '@mui/material';
import { Twitter, Email, GitHub, YouTube, Telegram } from '@mui/icons-material';

export default function Social() {
  const icons = [
    {
      link: {
        href: 'https://github.com/Cosmoslayer',
        target: '_blank',
      },
      component: {
        name: GitHub,
        props: {
          color: 'disabled',
          fontSize: 'large',
          sx: { 
            "&:hover": { 
              color: 'rgb(0, 0, 0)',
            },
          },
        },
      },
    },
    {
      link: {
        href: 'https://twitter.com/Cosmoslayer',
        target: '_blank',
      },
      component: {
        name: Twitter,
        props: {
          color: 'disabled',
          fontSize: 'large',
          sx: { 
            "&:hover": { 
              color: 'rgb(29, 161, 242)',
            },
          },
        },
      },
    },
    {
      link: {
        href: 'https://www.youtube.com/Cosmoslayer',
        target: '_blank',
      },
      component: {
        name: YouTube,
        props: {
          color: 'disabled',
          fontSize: 'large',
          sx: { 
            "&:hover": { 
              color: 'rgb(255, 0, 0)',
            },
          },
        },
      },
    },
    {
      link: {
        href: 'https://t.me/CosmoslayerX',
        target: '_blank',
      },
      component: {
        name: Telegram,
        props: {
          color: 'disabled',
          fontSize: 'large',
          sx: { 
            "&:hover": { 
              color: 'rgb(42, 171, 238)',
            },
          },
        },
      },
    },
    {
      link: {
        href: 'mailto:admin@cosmoslayer.com',
      },
      component: {
        name: Email,
        props: {
          color: 'disabled',
          fontSize: 'large',
          sx: { 
            "&:hover": { 
              color: 'rgb(234, 67, 53)',
            },
          },
        },
      },
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {icons.map((icon) => {
        const CustomTag = icon.component.name as unknown as keyof JSX.IntrinsicElements;
        return (
          <Link key={icon.link.href} {...icon.link} >
            <CustomTag {...icon.component.props}></CustomTag>
          </Link>
        );
      })}
    </Box>
  )
}