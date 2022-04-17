import React from 'react';
import Banner from '../Banner/Banner';
import Introduction from '../Intoduction/Introduction';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
           <Services></Services>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;