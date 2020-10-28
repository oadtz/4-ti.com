import React from 'react';
import Link from 'next/link';
import { withTranslation } from '../../../i18n';

import PrimaryLogo from '../../primary-logo.svg';
import LanguageSwitcher from './LanguageSwitcher';

class SiteHeader extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };
    }

    private toggleMenu () {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    public render () {
        const { t } = this.props;

        return (
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item has-text-left"><PrimaryLogo fill1="white" fill3="white" fill4="white" fill5="white" width="50px" /></a>
                        </Link>
                        <a role="button" className={`navbar-burger burger ${this.state.showMenu && 'is-active'}`} data-target="navbarBasicExample" aria-label="menu" aria-expanded="false"  onClick={this.toggleMenu.bind(this)}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample"  className={`navbar-menu ${this.state.showMenu && 'is-active'}`}>
                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    {t('aboutus')}
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <Link href="/about/#ourservices">
                                        <a className="navbar-item has-text-black">
                                            {t('services')}
                                        </a>
                                    </Link>
                                    <Link href="/about/#testimonials">
                                        <a className="navbar-item has-text-black">
                                            {t('testimonials')}
                                        </a>
                                    </Link>
                                    <Link href="/about/#team">
                                        <a className="navbar-item has-text-black">
                                            {t('team')}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <Link href="/#blogs">
                                <a className="navbar-item">
                                    {t('blogs')}
                                </a>
                            </Link>
                            <Link href="/jobs">
                                <a className="navbar-item">
                                    {t('jobs')}
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="navbar-item">
                                    {t('contact')}
                                </a>
                            </Link>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withTranslation('common')(SiteHeader);