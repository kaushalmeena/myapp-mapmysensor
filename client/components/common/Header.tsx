import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  Link,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Toolbar,
  Typography
} from '@material-ui/core';
import NextLink from 'next/link';
import React from 'react';

type HeaderProps = {
  pageTitle: string;
};

const PAGE_LINKS = [
  {
    title: 'Home',
    icon: 'home',
    href: '/'
  },
  {
    title: 'Map',
    icon: 'map',
    href: '/map'
  },
  {
    title: 'Search',
    icon: 'search',
    href: '/search'
  },
  {
    title: 'Route',
    icon: 'timeline',
    href: '/route'
  },
  {
    title: 'Test',
    icon: 'build',
    href: '/test'
  },
  {
    title: 'About',
    icon: 'info_outline',
    href: '/about'
  }
];

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = (): void => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = (): void => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = (): void => {
    setDrawerOpen(false);
  };

  const { pageTitle } = props;

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'user-popover' : undefined;

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="Menu"
            color="inherit"
            title="Menu"
            onClick={handleDrawerOpen}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Box flexGrow={1} mx={1}>
            <Typography variant="h6">{pageTitle}</Typography>
          </Box>
          <Box>
            <IconButton
              aria-describedby={id}
              aria-label="User"
              aria-haspopup="true"
              color="inherit"
              title="User"
              onClick={handlePopoverOpen}
            >
              <Icon>account_circle</Icon>
            </IconButton>
          </Box>
          <Popover
            id={id}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            anchorEl={anchorEl}
            open={popoverOpen}
            onClose={handlePopoverClose}
          >
            <Box px={2} py={1}>
              <Typography
                variant="subtitle2"
                color="textSecondary"
              >
                Logged in as
              </Typography>
              <Typography>
                kaushal.meena@gmail.com
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                align="center"
              >
                [admin]
              </Typography>
            </Box>
            <Divider />
            <NextLink href="logout">
              <ListItem button dense>
                <ListItemIcon>
                  <Icon>exit_to_app</Icon>
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </NextLink>
          </Popover>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box width={250}>
          <Box display="flex" flexDirection="row" justifyContent="center" p={2}>
            <Typography
              variant="h5"
            >
              mapmy
            </Typography>
            <Typography
              variant="h5"
              color="primary"
            >
              sensor
            </Typography>
          </Box>
          <Divider />
          {PAGE_LINKS.map((link) => (
            <NextLink key={`link-${link.title}`} href={link.href}>
              <ListItem button>
                <ListItemIcon>
                  <Icon>{link.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItem>
            </NextLink>
          ))}
          <Divider />
          <Link
            underline="none"
            color="textPrimary"
            href="https://github.com/kaushalmeena1996/myapp-mapmysensor"
          >
            <ListItem button>
              <ListItemIcon>
                <Icon>link</Icon>
              </ListItemIcon>
              <ListItemText primary="GitHub" />
            </ListItem>
          </Link>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
