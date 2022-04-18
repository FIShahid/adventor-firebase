import React from 'react';

const SingleReview = ({review}) => {
    const {name, img , description, ratings } =review
    return (
        <div className='shadow-lg p-5 mb-4'>
            <img className='p-3 w-50 rounded-pill mx-5' src={img} alt="" />
            <h5 className='fw-bold text-success'>{name}</h5>
            <p className=''>{description}</p>
            <h6>Experience:{ratings}</h6>
        </div>
    );
};

export default SingleReview;