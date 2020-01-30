import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import Header from '../components/common/Header';
import SearchPage from '../components/Search';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th003);

const Search = (): JSX.Element => (
  <>
    <Head>
      <title>MapMySensor :: Search</title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <Header />
      <SearchPage />
    </ThemeProvider>
  </>
);

export default Search;
