import React from 'react';
import Layout from '../components/Layout';
import gql from "graphql-tag";



class Index extends React.Component<any, any> {
    public render () {
        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <h1 className="title">
                            Hello
                        </h1>
                        <p className="subtitle">
                            Welcome to <strong>4-ti</strong>
                        </p>
                    </div>
                </section>
            </Layout>
        );
    }
}

const query = gql`
{
    home {
      Title_EN
      Description_EN
    }
}
`;

export default Index;