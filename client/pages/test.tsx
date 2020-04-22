import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import TestPage from '../components/Test';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th007);

const PAGE_TITLE = 'Test';

const Test = (): JSX.Element => (
  <>
    <Head>
      <title>
        {`MapMySensor :: ${PAGE_TITLE}`}
      </title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header pageTitle={PAGE_TITLE} />
      <TestPage />
    </ThemeProvider>
  </>
);

export default Test;
