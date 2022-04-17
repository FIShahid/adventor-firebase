import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='text-center p-4 text-white bg-dark'>
            <h6 className=''>All Rights Reserved || Adventure Travelers</h6>
            <p>copyright &copy; {year}</p>
        </footer>
    );
};

export default Footer;