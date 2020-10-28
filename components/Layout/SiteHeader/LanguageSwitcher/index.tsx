import React from 'react'
import { i18n } from '../../../../i18n'
import languages from '../../../../data/languages'

class LanguageSwitcher extends React.Component<any, any> {
    private changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    }

    public render () {
        const { language } = i18n;

        return (
            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                    <i className="fas fa-globe mr-1"></i>
                    {language?.toUpperCase()}
                </a>
                <div className="navbar-dropdown is-boxed">
                    {languages.map(l => {
                        return (
                            <a key={l.lang} id={l.lang} className="navbar-item has-text-black" onClick={() => this.changeLanguage(l.lang)}>
                                {l.name}
                            </a>
                        );
                    })}
                </div>
            </div> 
        );
    }
}


export default LanguageSwitcher