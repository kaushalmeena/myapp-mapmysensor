import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import HomePage from '../components/Home';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th001);

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>MapMySensor :: Home</title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header />
      <HomePage />
    </ThemeProvider>
  </>
);

export default Home;
