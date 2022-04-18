import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    const handleCheckout = () => {
        toast('Thank You For Choosing Me..')
    }

    return (
        <div className='container w-50'>
            <h2 className='mt-3 mb-3 text-primary text-center'>Proceed to Check Out</h2>
            <div className="row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Your Address" />
                </div>

                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">Division</label>
                    <select id="inputState" className="form-select">
                        <option value>Choose...</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Cumilla</option>
                        <option>Rajshahi</option>
                        <option>Sylhet</option>
                        <option>Khulna</option>
                        <option>Rangpur</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" onClick={handleCheckout} className="btn btn-primary w-100">Let's Go Wild</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default CheckOut;