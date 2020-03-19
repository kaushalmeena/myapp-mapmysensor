import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import RoutePage from '../components/Map';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th003);

const Route = (): JSX.Element => (
  <>
    <Head>
      <title>MapMySensor :: Route</title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header />
      <RoutePage />
    </ThemeProvider>
  </>
);

export default Route;
