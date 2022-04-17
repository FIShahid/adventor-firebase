import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id, name ,img , description ,price} =service;
    const navigate = useNavigate()
    // const navigateSeeDetail = id =>{
    //     navigate(`/services/${id}`)
    // }
    const navigateCheckout =()=>{
        navigate('/checkout')
    }
    return (
        <div className='shadow-lg p-2'>
            <img className='w-100' src= {img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            {/* <button onClick={()=>navigateSeeDetail(id)} className='btn btn-primary'>Book Now</button> */}
            <button onClick ={navigateCheckout} className='btn btn-primary' >Book now</button>
        </div>
    );
};

export default Service;