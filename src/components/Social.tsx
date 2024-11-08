import Link from 'next/link';

import { Box, SvgIcon } from '@mui/material';

import { icons } from '@/helpers/constants';

export default function Social() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: {
          xs: '50%',
          md: '25%'
        }
      }}
    >
      {icons.map((icon) => {
        return (
          <Link 
            key={icon.link.href}
            {...icon.link}
          >
            <SvgIcon
              color='disabled'
              fontSize='large'
              sx={icon.component.props.sx}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  d={icon.component.props.svg.path}
                >
                </path>
              </svg>
            </SvgIcon>
          </Link>
        );
      })}
    </Box>
  )
};
