import React from 'react'
import Input from './CommonInput';
import Button from './Buttoncomponent';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';

const Theater = () => {

    return (
        <div>
            <Navbar />
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Theater Details</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='TheaterName' iname='name' />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' />
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
export default Theater;

