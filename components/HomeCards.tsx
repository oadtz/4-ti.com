import React from 'react';
import ContentCard from './ContentCard';

import '../styles/Home.module.css';

import data from '../data/home';

const MainContent = () => {
    return (
            <div className="Features">
                <div className="columns">
                    { data?.cards?.map( (card, i) =>
                        <div key={i} className="column">
                            <ContentCard 
                            key={i}
                            Title={card.title}
                            Content={card.content} 
                            image={card.picture}
                            />
                        </div> 
                    ) }
                </div>
            </div>
    );
};

export default MainContent;