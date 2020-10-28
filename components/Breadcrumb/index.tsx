import React from 'react'
import Link from 'next/link'
import { withTranslation } from '../../i18n'
import { WithTranslationProps } from 'i18n'

interface IBreadcrumbProps {
    items?: IBreadcrumbItem[];
}

export interface IBreadcrumbItem {
    text: string;
    href?: string;
}

class Breadcrumb extends React.Component<IBreadcrumbProps & WithTranslationProps, any> {
    public render () {
        const {items, t} = this.props;

        return (
            <section className="section">
                <div className="breadcrumb" aria-label="breadcrumbs">
                    <div className="container">
                        <ul>
                            <li><Link href="/">{t('home')}</Link></li>
                            {(items || []).map((item, i) => {
                                if (!item.text)
                                    return null;

                                if (i === (items || []).length - 1)
                                    return <li key={i} className="is-active"><Link href="#">{t(item.text)}</Link></li>
                                
                                return <li key={i}><Link href={item.href}>{t(item.text)}</Link></li>
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export default withTranslation('common')(Breadcrumb);