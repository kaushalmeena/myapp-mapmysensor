import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import AboutPage from '../components/About';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th006);

const PAGE_TITLE = 'About';

const About = (): JSX.Element => (
  <>
    <Head>
      <title>
        {`MapMySensor :: ${PAGE_TITLE}`}
      </title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header pageTitle={PAGE_TITLE} />
      <AboutPage />
    </ThemeProvider>
  </>
);

export default About;
