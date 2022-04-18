import React from 'react';
import about2 from '../../../images/about2.jpg'
import './introduction.css'
const Introduction = () => {
    return (
        <div className='row d-flex  container m-auto gx-4'>
            <h1 className='text-primary mt-5 mb-3 text-center'>About Me..</h1>

<div className='col-md-6 p-2 '> 
                    <img  className='w-100' id='about' src={about2} alt="" />
                </div>
            <div className='col-md-6 shadow-lg ' >
                
                <h6 className='p-2 mt-5'>Hi There... I am <span className='text-info'>Shahid</span>. I am Freelance Travel Guide. I am an Adrenaline Junkie. If you are Looking for Adventure, you came to the right Person. I inspire People to be blessed by exploring the beauty in the Nature and Wild. I am a certified Mountain Climber and Deep Sea diver. I am also experts in handling wildlife and handle challenges. If you are looking for a solo Adventure or group travel while maintaining safety then contact me.  </h6>
                </div>
               
        </div>
    );
};

export default Introduction;