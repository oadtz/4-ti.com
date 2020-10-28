import React from 'react';

const Boximage = ({Title, description, image, width, ratio}) =>{
    return(
        <div className = "box box-size-100">
            <figure className={`${ratio} is-align-self-center`}>
                <img src={image} width={`${width}`}/>
            </figure>
            <div>
                <b>{Title}</b>
            </div>
            <div>
                {description}
            </div>
                
        </div>
    );
};

export default Boximage;