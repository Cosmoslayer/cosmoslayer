import Link from 'next/link';

import { icons } from '@/helpers/constants';
import { Box, SvgIcon } from '@mui/material';

export default function Social() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      {icons.map((icon) => {
        return (
          <Link 
            key={icon.link.href}
            {...icon.link}
          >
            <Box>
              <SvgIcon
                color='disabled'
                fontSize='large'
                sx={icon.component.props.sx}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={icon.component.props.svg.path}
                  >
                  </path>
                </svg>
              </SvgIcon>
            </Box>
          </Link>
        );
      })}
    </Box>
  )
};
