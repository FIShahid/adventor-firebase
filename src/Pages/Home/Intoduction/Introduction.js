import React from 'react';
import about from '../../../images/about.jpg'
import './introduction.css'
const Introduction = () => {
    return (
        <div className='row d-flex  container m-auto'>
            <h1 className='text-primary mt-5 mb-3'>About Me..</h1>

<div className='col-md-6 p-2 '> 
                    <img  className='w-100' id='about' src={about} alt="" />
                </div>
            <div className='col-md-6'>
                
                <h6 className='p-2 mt-5'>Hi There... I am <span className='text-info'>Shahid</span>. I am Freelance Travel Guide. I am an Adrenaline Junkie. If you are Looking for Adventure, you came to the right Person. I inspire People to be blessed by exploring the beauty in the Nature and Wild</h6>
                </div>
               
        </div>
    );
};

export default Introduction;