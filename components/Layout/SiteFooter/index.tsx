import React from 'react';

import styles from './styles.module.scss';


class SiteFooter extends React.Component<any, any> {
    
    public render () {
        return(
            <footer className="footer">    
                <div className="container">
                    <div className="content has-text-centered">       
                                <h3>
                                    <a href="https://www.4-ti.com">
                                        <strong>
                                        forti
                                        </strong>
                                    </a>
                                </h3>
                                <p>4-ti © 2019, Co. Ltd. company</p> 
                        <ul className={styles.socialLinks}>
                            <li><i className="fab fa-facebook fa-lg"></i></li>
                            <li><i className="fab fa-linkedin fa-lg"></i></li>
                            <li><i className="fa fa-envelope fa-lg"></i></li>
                        </ul>
                    </div> 
                </div>
            </footer>
            
        );
    }
    
}

export default SiteFooter;