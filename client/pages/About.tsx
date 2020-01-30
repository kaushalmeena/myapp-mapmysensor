import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import AboutPage from '../components/About';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th006);

const About = (): JSX.Element => (
  <>
    <Head>
      <title>MapMySensor :: About</title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header />
      <AboutPage />
    </ThemeProvider>
  </>
);

export default About;
