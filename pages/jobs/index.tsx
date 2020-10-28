import React from 'react';
import Link  from 'next/link';
import { i18n, withTranslation } from '../../i18n';

import Layout from '../../components/Layout';
import jobs from '../../data/jobs'

class Jobs extends React.Component<any, any> {
    public render () {
        const { t } = this.props;
        const { language } = i18n;

        return (
            <Layout breadcrumbItems={[{text: 'jobs'}]}>
                <section className="section has-background-white">
                    <div className="container">
                        <h1 className="title">{t('jobs_title')}</h1>
                        <h2 className="subtitle">
                            {t('jobs_subtitle')}
                        </h2>
                        <div className="box">
                            <div className="content">
                                <h2>{t('jobs_positions')}</h2>
                                <ul>
                                    {jobs.map((job, i) => 
                                        <li key={i}>
                                            <Link href={`/jobs/${encodeURIComponent(job.title.en)}`}>
                                                {job.title[language] || job.title.en}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        );
    }
}

export default withTranslation('common')(Jobs);