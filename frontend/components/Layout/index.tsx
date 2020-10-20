import React from 'react';
import Head from 'next/head';
import SiteHeader from './SiteHeader';

class Layout extends React.Component<any, any> {
    public render () {
        const {children} = this.props;

        return (
            <div>
                <Head>
                    <title>4-ti</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <body className="has-navbar-fixed-top" />
                </Head>
                <SiteHeader />
                {children}
            </div>
        );
    }
}

export default Layout;