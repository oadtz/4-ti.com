import React from 'react';
import Head from 'next/head';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Breadcrumb, { IBreadcrumbItem } from '../Breadcrumb';

interface ILayoutProps {
    hideBreadcrumb?: boolean
    breadcrumbItems?: IBreadcrumbItem[]
}

class Layout extends React.Component<ILayoutProps, any> {
    public render () {
        const {children, hideBreadcrumb, breadcrumbItems} = this.props;

        return (
            <div>
                <Head>
                    <title>4-ti</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
                    <body className="has-navbar-fixed-top" />
                </Head>
                <SiteHeader />
                {!hideBreadcrumb && <Breadcrumb items={breadcrumbItems} />}
                {children}
                <SiteFooter />
            </div>
        );
    }
}

export default Layout;