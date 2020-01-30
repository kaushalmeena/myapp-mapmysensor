import {
  AppBar,
  Box,
  Divider,
  Icon,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import generateUniqueKey from '../../utils/generateUniqueKey';

const PAGE_LINKS = [
  {
    title: 'Home',
    icon: 'home',
    href: '/',
  },
  {
    title: 'Map',
    icon: 'map',
    href: '/map',
  },
  {
    title: 'Search',
    icon: 'search',
    href: '/search',
  },
  {
    title: 'Route',
    icon: 'timeline',
    href: '/route',
  },
  {
    title: 'About',
    icon: 'info_outline',
    href: '/about',
  },
];

const OTHER_LINKS = [
  {
    title: 'Github',
    icon: 'link',
    href: 'https://github.com/kaushalmeena1996/myapp-mapmysensor',
  },
];

const Header: React.FunctionComponent = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Box flexGrow={1}>
            <Typography variant="h6">
              mapmysensor
              <Box color="primary.dark" component="span">
                .com
              </Box>
            </Typography>
          </Box>
          <Box display={{ xs: 'none', sm: 'block' }}>
            {PAGE_LINKS.map((link) => (
              <Link key={`page-link-${generateUniqueKey()}`} href={link.href}>
                <IconButton
                  aria-label="Link"
                  color="inherit"
                  title={link.title}
                >
                  <Icon>{link.icon}</Icon>
                </IconButton>
              </Link>
            ))}
          </Box>
          <Box display={{ xs: 'block', sm: 'none' }}>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <Icon>more_vert</Icon>
            </IconButton>
          </Box>
          <Menu
            keepMounted
            variant="menu"
            autoFocus={false}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {PAGE_LINKS.map((link) => (
              <Link key={`page-link-${generateUniqueKey()}`} href={link.href}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>{link.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItem>
              </Link>
            ))}
            <Divider />
            {OTHER_LINKS.map((link) => (
              <a key={`other-link-${generateUniqueKey()}`} href={link.href}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon>{link.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItem>
              </a>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
