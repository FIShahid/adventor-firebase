import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const navigateLogin = () =>{
        navigate('/login');

    }

    if(user){
        navigate('/home');
    }
    const handleRegister = e =>{
     e.preventDefault();   
     const name = e.target.name.value;
     const email = e.target.email.value;
     const password = e.target.password.value;

     createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='signup-form'>
            <h2 className='text-primary text-center mt-3 mb-2'  >Please Sign Up</h2>
            <form onSubmit={handleRegister} >
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                {/* <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" /> */}
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                {/* <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <input
                    
                    className='w-100 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Sign Up" />

            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
                </div>
                
    );
};

export default SignUp;