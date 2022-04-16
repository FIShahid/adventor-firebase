import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const{name ,img , description ,price} =service
    return (
        <div className='shadow-lg p-2'>
            <img src= {img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <button className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;