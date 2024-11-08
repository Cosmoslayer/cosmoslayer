import { useState } from 'react';

import Link from 'next/link';

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';

import { Menu } from '@mui/icons-material';

import { lists, pages } from '@/helpers/constants';

export default function Header() {

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {lists.map((list) => (
          <ListItem
            key={list.name}
            component={Link}
            href={list.link}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <ListItemText primary={list.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: {
                xs: 'none',
                md: 'flex'
              },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cosmoslayer
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
                md: 'none'
              }
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <Menu />
            </IconButton>            
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {
                xs: 'flex',
                md: 'none'
              },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Cosmoslayer
          </Typography>
          <Box 
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {pages.map((page) => (
              <Link
                key={page.name}
                href={page.link}
              >
                <Button
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block'
                  }}
                >                
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>          
        </Toolbar>
      </Container>
    </AppBar>
  )  
}
