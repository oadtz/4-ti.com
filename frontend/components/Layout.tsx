import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface ILayoutProps { };
interface ILayoutState { };

class Layout extends React.Component<ILayoutProps, ILayoutState> {
    public render () {
        const {children} = this.props;

        return (
            <div>
                <Head>
                    <title>4-ti</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link href="/">
                                <a className="navbar-item"><img src="/img/logo.svg" width="112" /></a>
                            </Link>
                        </div>
                    </div>
                </nav>
                {children}
            </div>
        );
    }
}

export default Layout;