import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='container'>
                   <h1 className='text-primary text-center mt-5 mb-4'>Top Reviews for Adventure Travelers</h1>
            <div className='services-container'>
               {
                   reviews.map(review=><SingleReview
                   key={review.id}
                   review={review}
                   ></SingleReview>)
               }
            </div>

            
        </div>
    );
};

export default Reviews;