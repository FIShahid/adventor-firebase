import React from 'react';

const SingleReview = ({review}) => {
    const {name, img , description, ratings } =review
    return (
        <div className=''>
            <img className='p-3' src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{ratings}</p>
        </div>
    );
};

export default SingleReview;