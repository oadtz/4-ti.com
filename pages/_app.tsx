import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n'

import '../sass/styles.scss';
import '../styles/globals.css'

class MyApp extends App {
  public render () {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />;
  }
}

export default appWithTranslation (MyApp);
