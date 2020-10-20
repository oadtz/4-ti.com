import React from 'react';
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { Query } from 'react-apollo'
import Layout from '../components/Layout'

class Index extends React.Component<any, any> {
    public render () {
        const query = gql`
            {
                home {
                    Title_EN
                    Description_EN
                }
            }
        `;
        
        return (
            <Layout>
                <Query query={query}>
                    {({data}) => (
                        <section className="section">
                            <div className="container">
                                    <h1 className="title">
                                        {data?.home?.Title_EN}
                                    </h1>
                                    <p className="subtitle">
                                        {data?.home?.Description_EN}
                                    </p>
                            </div>
                        </section>
                    )}
                </Query>
            </Layout>
        );
    }
}

export default Index;