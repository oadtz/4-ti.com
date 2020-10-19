import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';

import client from '../lib/apollo';

import withData from '../lib/apollo';

import '../node_modules/bulma/css/bulma.css'

class MyApp extends App<any, any> {
  public render () {
    const { Component, pageProps } = this.props;
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default MyApp;
