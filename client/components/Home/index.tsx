import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Icon,
  Typography,
} from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import { generateUniqueKey } from '../../utils';

export interface Page {
  title: string;
  icon: string;
  href?: string;
  description: string;
  cols: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

const PageData: Page[] = [
  {
    title: 'Welcome',
    icon: 'home',
    description: 'mms@svnit.ac.in',
    cols: 3,
  },
  {
    title: 'Map',
    icon: 'map',
    href: '/map',
    description: 'Display centres, locations and sensors on map.',
    cols: 9,
  },
  {
    title: 'Logout',
    icon: 'exit_href_app',
    href: '/logout',
    description: 'Logs out from application.',
    cols: 3,
  },
  {
    title: 'Search',
    icon: 'search',
    href: '/search',
    description:
      'Search centres, location or sensor by text or by applying filters.',
    cols: 3,
  },
  {
    title: 'Route',
    icon: 'timeline',
    href: '/route',
    description: 'Generate route between selected centres and sensors.',
    cols: 3,
  },
  {
    title: 'About',
    icon: 'info_outline',
    href: '/about',
    description: 'Display information about application.',
    cols: 3,
  },
];

const Home: React.FunctionComponent = (): JSX.Element => (
  <Container>
    <Box bgcolor="grey[100]" borderRadius={2} boxShadow={1} my={2} p={2}>
      <Grid container spacing={3}>
        {PageData.map((page) => (
          <Grid
            item
            key={`grid-item-${generateUniqueKey()}`}
            md={page.cols}
            xs={12}
            sm={12}
          >
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h5">{page.title}</Typography>
                    <Typography color="textSecondary" variant="body2">
                      {page.description}
                    </Typography>
                  </Box>
                  <Box>
                    <Icon fontSize="large">{page.icon}</Icon>
                  </Box>
                </Box>
              </CardContent>
              {page.href && (
                <CardActions>
                  <Box ml="auto">
                    <Link href={page.href}>
                      <Button color="primary" variant="contained">
                        <Icon fontSize="small">arrow_forward</Icon>
                      </Button>
                    </Link>
                  </Box>
                </CardActions>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Home;
