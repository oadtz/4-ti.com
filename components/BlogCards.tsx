import React from 'react';

const Cards = ( {name, account, content, image, profile} ) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="Content" height="128"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={profile} alt="profile"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{name}</p>
                        <p className="subtitle is-6">{account}</p>
                    </div>
                </div>

                <div className="content">
                    {content}
                    <br/>
                </div>
            </div>
        </div>
    );
};

export default Cards;