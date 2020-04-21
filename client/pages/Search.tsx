import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import SearchPage from '../components/Search';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th003);

const PAGE_TITLE = 'Search';

const Search = (): JSX.Element => (
  <>
    <Head>
      <title>
        {`MapMySensor :: ${PAGE_TITLE}`}
      </title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header pageTitle={PAGE_TITLE} />
      <SearchPage />
    </ThemeProvider>
  </>
);

export default Search;
