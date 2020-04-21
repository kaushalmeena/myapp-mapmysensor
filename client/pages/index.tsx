import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import HomePage from '../components/Home';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th001);

const PAGE_TITLE = 'Home';

const Home = (): JSX.Element => (
  <>
    <Head>
      <title>
        {`MapMySensor :: ${PAGE_TITLE}`}
      </title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header pageTitle={PAGE_TITLE} />
      <HomePage />
    </ThemeProvider>
  </>
);

export default Home;
