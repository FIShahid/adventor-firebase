import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id, name ,img , description ,price} =service;
    const navigate = useNavigate()
    const navigateCheckout = id =>{
        navigate(`/services/${id}`)
    }
    return (
        <div className='shadow-lg p-2'>
            <img className='w-100' src= {img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <button onClick={()=>navigateCheckout(id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;