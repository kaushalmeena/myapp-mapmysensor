import App from "next/app";
import React, { Fragment } from "react";

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            margin: 0;
          }

          a {
            color: inherit;
            text-decoration: inherit;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default MyApp;
