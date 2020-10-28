import React from 'react';
import Boximage from '../../components/BoxImage';
import Layout from '../../components/Layout';
import Collasible from 'react-collapsible';
import about from '../../data/about';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

class Services extends React.Component<any, any> {
    public render () {      
        return (
            <Layout breadcrumbItems={[{text: 'About Us'}]}>
                <section id="ourservices" className="SectionComponent hero section has-text-centered is-block is-relative is-white is-small">
                    <div id="featuresection" className="container">
                        <header className="SectionHeader__header is-centered">
                            <h1 className="title is-spaced has-text-weight-bold is-3">
                                Our Services
                            </h1>
                            <p className="subtitle">
                                As a customer software delivery company, our craft is to build sustainable, robust and beautiful software!
                            </p>
                        </header>
                            <div className="Features">

                                <div className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile">
                                    <div className="column Feature__box">
                                        <span className="Feature__label orange title"> 
                                            Plan 
                                        </span>
                                    </div>
                                    <div className="column is-half">
                                        <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
                                        </h3>
                                        <p className="subtitle">
                                            Even if you run agile projects, preparation is key. We can help you with planning, be it together with your business or IT. We are a delivery focused company and support your from end to end.
                                        </p>
                                    </div>
                                </div>
                                <div className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile">
                                    <div className="column is-half">
                                        <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
                                        </h3>
                                        <p className="subtitle">
                                            Software technology is changing rapidly. We love technology and are not afraid of it. With our profound experience we deliver software using best practices and up to date technology stacks.
                                        </p>
                                    </div>
                                    <div className="column Feature__box">
                                        <span className="Feature__label orange title"> 
                                        Build 
                                        </span>
                                    </div>
                                </div>
                                <div className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile">
                                    <div className="column Feature__box">
                                        <span className="Feature__label orange title"> 
                                        Deliver 
                                        </span>
                                    </div>
                                    <div className="column is-half">
                                        <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
                                        </h3>
                                        <p className="subtitle">
                                            In the digital world, pace is high and unpredictable. We have to deliver, test and change based on the feedback very fast. We are exited about this fast pace and uncertainty. Be it A/B testing, canary releases, we push as often we can.
                                        </p>
                                    </div>
                                </div>
                                <div className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile">
                                    <div className="column is-half">
                                        <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
                                        </h3>
                                        <p className="subtitle">
                                            Having a plan, build and delivery set up is good. But having the right strategy and measurements for every cycle is even better. Even when the last cycle (see plan, build and deliver) was not delivery as expected. With the right architecture and delivery set up, our artifacts are sustainable and robust for changes.
                                        </p>
                                    </div>
                                <div className="column Feature__box">
                                <span className="Feature__label orange title"> 
                                Repeat 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="hero is-small is-primary large-space has-text-centered">
                <div className="container">
                    <h1 className="title">
                        Testimonials
                    </h1>

                    <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={10}
                    visibleSlides={2.75}
                    totalSlides={about?.testimonials?.length}
                    isIntrinsicHeight={true}
                    dragStep={0.3}
                    className="slider"
                    >
                        <Slider className="columns">
                            { about?.testimonials?.map( (testimonial, i) =>
                                <Slide index={i} >
                                    <div className="column">
                                        <Boximage 
                                        Title='' 
                                        description=''
                                        image={testimonial.picture}
                                        width="256"
                                        ratio="is-4by3"
                                        />
                                    </div>
                                </Slide>
                            ) } 
                        </Slider>
                    </CarouselProvider>
                </div>
            </section>

            <section id="team" className="hero-body is-large is-white-bg large-space has-text-centered">
                <div className="container">
                    <h1 className="title">
                        Teams
                    </h1>
                        <div className="columns">
                            { about?.teams?.map( (team, i) =>
                                    <div key={i} className="column">
                                        <Boximage 
                                        Title={team.name}
                                        description = {team.description}
                                        image={team.profilepic}
                                        width="256"
                                        ratio="is-square"
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

export default Services;