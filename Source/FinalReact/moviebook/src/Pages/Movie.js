import React from 'react'
import Input from './CommonInput';
import Selectinput from './Selectinput';
import Button from './Buttoncomponent';
import '../Css/register.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Movie = () => {
    return (
        <div>
            <Navbar />
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Movie Details</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='MovieName' iname='name' />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Show' iname='show' />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Language' iname='language' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Actor Name' iname='actor' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='StartDate' iname=' startdate' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='EndDate' iname='enddate' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='file' lname='MovieImage' iname='movieimage' />
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
export default Movie;