import React from 'react'
import ReactMarkdown from 'react-markdown'
import { i18n, withTranslation } from '../../i18n'

import Layout from '../../components/Layout';

import jobs from '../../data/jobs'


class Job extends React.Component<any, any> {
    public render () {
        const { job, t } = this.props;
        const { language } = i18n;

        return (
            <Layout breadcrumbItems={[{text: 'jobs', href: '/jobs'}, {text: job?.title[language] || job?.title.en }]}>
                <section className="section has-background-white">
                    <div className="container">
                        <h1 className="title">{job?.title[language] || job?.title.en}</h1>
                        <h2 className="subtitle">
                            {t('jobs_posteddate')}: <small>{job?.posted_date}</small>
                        </h2>
                        <div className="content">
                            <ReactMarkdown>
                                {job?.description[language] || job?.description.en}   
                            </ReactMarkdown>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export async function getStaticPaths () {
    return {
        paths: jobs.map(job => `/jobs/${encodeURIComponent(job.title.en)}`),
        fallback: false
    };
}

export async function getStaticProps ({ params }) {
    return {
        props: {
            job: jobs.find(job => job.title.en == params.id)
        },
    };
}

export default withTranslation('common')(Job);