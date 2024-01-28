import Steam from '@/components/Steam';
import Social from '@/components/Social';
import Profile from '@/components/Profile';
import History from '@/components/History';

export const items = [
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

export const icons = [
  {
    link: {
      href: 'https://github.com/Cosmoslayer',
      target: '_blank',
    },
    component: {
      name: "GitHub",
      props: {
        sx: { 
          "&:hover": { 
            color: 'rgb(0, 0, 0)',
          },
        },
        svg: {
          path: "M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z",
        }
      },
    },
  },
  {
    link: {
      href: 'https://twitter.com/Cosmoslayer',
      target: '_blank',
    },
    component: {
      name: "X",
      props: {
        sx: { 
          "&:hover": { 
            color: 'rgb(0, 0, 0)',
          },
        },
        svg: {
          path: "M10.053,7.988l5.631,8.024h-1.497L8.566,7.988H10.053z M21,7v10	c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V7c0-2.209,1.791-4,4-4h10C19.209,3,21,4.791,21,7z M17.538,17l-4.186-5.99L16.774,7	h-1.311l-2.704,3.16L10.552,7H6.702l3.941,5.633L6.906,17h1.333l3.001-3.516L13.698,17H17.538z",
        }
      },
    },
  },
  {
    link: {
      href: 'https://www.youtube.com/Cosmoslayer',
      target: '_blank',
    },
    component: {
      name: "YouTube",
      props: {
        sx: { 
          "&:hover": { 
            color: 'rgb(255, 0, 0)',
          },
        },
        svg: {
          path: "M21,5c0,0-3-1-9-1S3,5,3,5s-1,3-1,7s1,7,1,7s3,1,9,1s9-1,9-1s1-3,1-7S21,5,21,5z M10,15.464V8.536L16,12L10,15.464z",
        }
      },
    },
  },
  {
    link: {
      href: 'https://www.twitch.tv/Cosmoslayer',
      target: '_blank',
    },
    component: {
      name: "Twitch",
      props: {
        sx: { 
          "&:hover": { 
            color: 'rgb(145 70 255)',
          },
        },
        svg: {
          path: "M 5.3632812 2 L 2 6.6367188 L 2 20 L 7 20 L 7 23 L 10 23 L 13 20 L 17 20 L 22 15 L 22 2 L 5.3632812 2 z M 6 4 L 20 4 L 20 13 L 17 16 L 12 16 L 9 19 L 9 16 L 6 16 L 6 4 z M 11 7 L 11 12 L 13 12 L 13 7 L 11 7 z M 16 7 L 16 12 L 18 12 L 18 7 L 16 7 z",
        }
      },
    },
  },
  {
    link: {
      href: 'https://telegram.me/CosmoslayerX',
      target: '_blank',
    },
    component: {
      name: "Telegram",
      props: {
        sx: { 
          "&:hover": { 
            color: 'rgb(42, 171, 238)',
          },
        },
        svg: {
          path: "M 19.976562 3.1210938 L 19.611328 3.2695312 C 19.611328 3.2695312 6.6375504 8.5740484 2.6132812 10.267578 L 2.0019531 10.525391 L 2.0019531 12.779297 L 6.9472656 14.755859 L 8.6796875 19.996094 L 10.251953 20.005859 L 12.955078 17.720703 L 16.355469 20.996094 L 18.808594 20.996094 L 21.964844 3.875 L 19.976562 3.1210938 z M 19.646484 5.4179688 L 17.146484 18.980469 L 13.044922 15.029297 L 10.224609 17.410156 L 11 14.375 L 17.28125 8 L 17.082031 7.7988281 C 17.082031 7.7988281 10.706702 11.473998 8.0019531 13.023438 L 4.5371094 11.638672 C 9.0770415 9.7455758 18.697943 5.8058761 19.646484 5.4179688 z",
        }
      },
    },
  },
  {
    link: {
      href: 'mailto:admin@cosmoslayer.com',
    },
    component: {
      name: "Email",
      props: {
        sx: { 
          "&:hover": { 
            color: 'rgb(234, 67, 53)',
          },
        },
        svg: {
          path: "M22 4H2v16h20V4zm-2 4l-8 5-8-5V6l8 5 8-5v2z",
        }
      },
    },
  },
];
