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
            <h3 className='fw-bold text-success mt-3' >{name}</h3>
            <p className='fw-bold'>{description}</p>
            <h6 className='fw-bold text-info mb-4'>Price: ${price}</h6>
            {/* <button onClick={()=>navigateSeeDetail(id)} className='btn btn-primary'>Book Now</button> */}
            <button onClick ={navigateCheckout} className='btn btn-primary w-100' >Book now</button>
        </div>
    );
};

export default Service;