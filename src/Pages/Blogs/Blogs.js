import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-75 shadow'>
            <h1 className='text-primary text-center mt-3 mb-5'>Question and Answer</h1>

            <div>
                <h4 className='mb-4 text'> Difference between Authorization and Authentication</h4>
                <p>Authentication and Authorization are both common term and often use in websites security system. Although their name name implementation almost similar they are not the same think. <span className='text-success'>Authentication</span> means confirming your own identity by validating your personal credential like your Name/User Name and Password. Once you enter your credentials the system checks your info and then if it matches it grants permission which is referred as <span className='text-success'>Authorization</span>. Authorization occurs when you successfully authenticated by the system. After validation the the system decides if you are authorized to access the system or resources.In simple terms, authorization determines your ability to access the system and up to what extent.
                </p>
            </div>

            <div>
            <h4 className='mt-3 mb-4 '> Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>
                    Firebase is now often used in building mobile and web applications.Because it has a large range of services and features like Fast and safe hosting ,Reliable and extensive Database, Google Analytics ,Multi-platform firebase authentication. It is also very beginner friendly. It has a very good and rich documentation. Its also easy to set up and integrate.  

                    Besides firebase there are many other available systems to implement authentication like Okta , Auth0 , Salesforce ,OneLogin ,Parse etc.

                </p>

                <div>
                    <h4 className='mt-3 mb-4'> What other services does firebase provide other than authentication</h4>
                    <p>
                        Firebase is often used to Implement Authentication System. But beside this it also provides some powerful services. It works under google so it has very reliable and powerful database. Another advantage of Firebase is its Cloud Fire store. This NoSQL database makes it easy for programmers to transfer and store data for front and backend development. Firebase also provides fast and secure hosting which supports all kind of content type. It also provides Google Analytics, with the help of analytic solution reports the developers how users are behaving towards their mobile and web applications. Firebase Analytics is also beneficial to improve retention and engagement rates of users for your application. It also provides other useful services like Cloud Storage, Prediction ,Cloud Messaging  etc. </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;