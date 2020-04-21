import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import React from 'react';
import LoginPage from '../components/Login';
import themes from '../constants/themes';

const THEME = createMuiTheme(themes.th005);

const PAGE_TITLE = 'Login';

const Login = (): JSX.Element => (
  <>
    <Head>
      <title>
        {`MapMySensor :: ${PAGE_TITLE}`}
      </title>
      <meta name="theme-color" content={THEME.palette.primary.main} />
    </Head>
    <ThemeProvider theme={THEME}>
      <LoginPage />
    </ThemeProvider>
  </>
);

export default Login;
