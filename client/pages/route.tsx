import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import RoutePage from '../components/Map';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th004);

const PAGE_TITLE = 'Route';

const Route = (): JSX.Element => (
  <>
    <Head>
      <title>
        {`MapMySensor :: ${PAGE_TITLE}`}
      </title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header pageTitle={PAGE_TITLE} />
      <RoutePage />
    </ThemeProvider>
  </>
);

export default Route;
