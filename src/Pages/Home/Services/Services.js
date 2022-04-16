import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';
import Reviews from '../Reviews/Reviews';


const Services = () => {
    const [services, setServices]= useState([]);
    // const [reviews , setReviews] =useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    // useEffect(()=>{
    //     fetch('reviews.json')
    //     .then(res=>res.json())
    //     .then(data=>setReviews(data))
    // },[]);

    return (
        <div className='container'>
            <h1 className='text-primary text-center mb-4'>What i Offer...</h1>
            <div className="services-container">
            {
                services.map(service=><Service
                key={service.id}
                service={service}
                
                ></Service>)
            }
            {/* <div className="service-container">
                {
                    reviews.map(review=><Reviews>
                         key={review.id}
                    review={review}
                    </Reviews>
                   
                   )
                }
            </div> */}
            </div>
        </div>
    );
};

export default Services;