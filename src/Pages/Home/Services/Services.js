import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    

    return (
        <div className='container'>
            <h1 className='text-primary text-center mt-4 mb-4'>What i Offer...</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}

                    ></Service>)
                }
            </div>
     

        </div>
    );
};

export default Services;