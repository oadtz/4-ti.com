import React from 'react';
import App from 'next/app';
import { ApolloProvider } from '@apollo/client';

import withData from '../lib/apollo';

import '../node_modules/bulma/css/bulma.css'

class MyApp extends App<any, any> {
  public render () {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// import '../styles/globals.css'

// function MyApp({ Component, pageProps, apollo }) {
//   return (
//     <ApolloProvider client={apollo}>
//       <Component {...pageProps} />
//     </ApolloProvider>
//   );
// }

export default withData(MyApp)
