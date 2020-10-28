import React from 'react';
import ReactMarkdown from 'react-markdown';

const Boxtext = ({Title, Content, image}) =>{
    return(
        <div className = "box box-size-100 has-text-centered">
            <h1 className="subtitle has-text-black columns is-centered">
                <strong>
                    {Title}
                </strong>
            </h1>
            
            <div className="over large-space">
                <img src={image} width="20%" />
            </div>

            <div className="columns is-centered large-space">
                <ReactMarkdown>
                    {Content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default Boxtext;