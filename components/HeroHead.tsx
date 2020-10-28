import React from 'react';
import Link from 'next/link';

const HeroHead = ({title, subtitle}) => {
    return (
        <div className="container has-text-centered">
            <div className="animate__animated animate__fadeIn">
                <img src="/img/4-Ti-logo-primary-logo.png" width="40%" />
                <div>
                    <h1 className="title">
                        {title}
                    </h1>
                </div>
                <div>
                    <h2 className="subtitle has-text-white">
                        {subtitle}
                    </h2>
                </div>
                <div>
                <Link href="/#slogan">
                    <button className="button is-link is-rounded">
                        <i className="fas fa-chevron-down has-text-black"></i>
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroHead;