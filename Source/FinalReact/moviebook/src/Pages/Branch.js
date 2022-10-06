import React, { useState } from 'react'
import Input from './CommonInput';
import Selectinput from './Selectinput';
import Button from './Buttoncomponent';
import '../Css/register.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Booking = () => {
    const [input, setinput] = useState({});
    const handleonchange = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }
    const handleonclick = () => {
        console.log(input)
    }
    return (
        <div>
            <Navbar />
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Branch Details</h2>
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='TheraterName' iname='theatername' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='BranchName' iname='name' ifunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Phone' iname='phone' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='email' lname='Email' iname='email' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Address' iname='address' />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='MovieName' iname='movieName' />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' bfunction={handleonclick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Booking;