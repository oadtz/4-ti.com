import React from 'react';
import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import Layout from '../components/Layout';


const Index = () => {
    const { data, loading, error } = useQuery(query);

    if (!data)
        return null;

    return (
        <Layout>
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        {data.home.Title_EN}
                    </h1>
                    <p className="subtitle">
                        {data.home.Description_EN}
                    </p>
                </div>
            </section>
        </Layout>
    );
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