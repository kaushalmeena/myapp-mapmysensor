/* eslint-disable react/jsx-props-no-spreading */
import App from 'next/app';
import React from 'react';

class MyApp extends App {
  componentDidMount(): void {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Component {...pageProps} />
        <style jsx global>
          {`
            body {
              margin: 0;
              background-image: url("./assets/img/pattern.png");
            }
            a {
              color: inherit;
              text-decoration: inherit;
            }
          `}
        </style>
      </>
    );
  }
}

export default MyApp;
