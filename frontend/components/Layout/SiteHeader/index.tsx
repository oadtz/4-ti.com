import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss'

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
        return (
            <nav className="navbar is-fixed-top has-shadow is-transparent" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <Link href="/">
                            <a className="navbar-item has-text-left"><img className={styles.logo}src="/img/logo.svg" /></a>
                        </Link>
                        <a role="button" className={`navbar-burger burger ${this.state.showMenu && 'is-active'}`} data-target="navbarBasicExample" aria-label="menu" aria-expanded="false"  onClick={this.toggleMenu.bind(this)}>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample"  className={`navbar-menu ${this.state.showMenu && 'is-active'}`}>
                        <div className="navbar-end">
                            <Link href="/">
                                <a className="navbar-item">
                                    Home
                                </a>
                            </Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    About Us
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <Link href="/about/us">
                                        <a className="navbar-item">
                                            Who Are We
                                        </a>
                                    </Link>
                                    <Link href="/about/services">
                                        <a className="navbar-item">
                                            Our Services
                                        </a>
                                    </Link>
                                    <Link href="/about/jobs">
                                        <a className="navbar-item">
                                            Work With Us
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <Link href="/contact">
                                <a className="navbar-item">
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SiteHeader;