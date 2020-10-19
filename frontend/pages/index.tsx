import React from 'react';
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import Layout from '../components/Layout'


const Index = () => {
    const query = gql`
    {
        home {
          Title_EN
          Description_EN
        }
    }
    `;
    const { data } = useQuery(query);

    return (
        <Layout>
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
        </Layout>
    );
}

export default Index;