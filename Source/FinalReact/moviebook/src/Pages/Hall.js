import React from 'react'
import Input from './CommonInput';
import Selectinput from './Selectinput';
import Button from './Buttoncomponent';
import '../Css/register.css'
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Hall = () => {
    return (
        <div>
            <Navbar />
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Hall Details</h2>
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='BranchName' iname='branchid' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='HallName' iname='name' />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='HallType' iname='halltype' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Totalseats' iname='totalseat' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='email' lname='AmountPerSeats' iname='amountperseat' />
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
export default Hall;