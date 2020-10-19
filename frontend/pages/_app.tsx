import React from 'react';
import App from 'next/app';
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient, NormalizedCacheObject } from "apollo-boost"

import withApollo from '../lib/apollo';

import '../node_modules/bulma/css/bulma.css'

interface IMyAppProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

class MyApp extends App<IMyAppProps> {
  public render () {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
