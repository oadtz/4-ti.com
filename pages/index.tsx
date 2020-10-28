import React from 'react';
import Layout from '../components/Layout'
import HeroHead from'../components/HeroHead';
import HomeCards from '../components/HomeCards';
import BlogCards from '../components/BlogCards';
import data from '../data/home';

import "animate.css/animate.min.css";

class Index extends React.Component<any, any> {
    public render () {
        return (
            <Layout hideBreadcrumb={true}>
                <section id="home" className="landing is-gradient">
                    <div className="is-item-center">
                        <HeroHead 
                        title='WE PLAN .BUILD .DELIVER AND REPEAT'
                        subtitle = 'A new generation of custom software delivery.'
                        /> 
                    </div>
                </section>

                <section id="slogan" className="hero-body is-medium has-background-white">
                        <div className="container">
                            <div className="has-text-centered">
                                <div>
                                    <h1 className="title">
                                        Building software is our Craft
                                    </h1>
                                </div>
                                <div>
                                    <h2 className="subtitle has-text-black has-text-centered">
                                        As a software development company, we build software from "web
                                        <br/>
                                        to microservices" that is robust, durable, and beautiful.
                                    </h2>
                                </div>
                                <div>
                                    <h1 className="title large-space">
                                        THIS IS <b className="has-text-primary">HOW WE DO IT</b>
                                    </h1>
                                </div>
                            </div>
                            <HomeCards />
                    </div>
                </section>
                
                <section className="hero-body is-medium large-space">
                    <div id="blogs" className="container">
                        <div className="has-text-centered">
                            <br/>
                                <h1 className = "title has-text-centered" >BLOGS</h1>
                            <br/>
                        </div>

                        <div className="columns">
                        { data?.blogcards?.map( (blogcard, i) =>
                            <div key={i} className="column">
                                <BlogCards
                                name={blogcard.name}
                                account={blogcard.account}
                                content={blogcard.description}
                                image={blogcard.contentpic}
                                profile={blogcard.profilepic} 
                                />
                            </div> 
                            ) }
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Index;