import React from "react";
import '../Css/register.css'
import Input from "./CommonInput";
import Selectinput from "./Selectinput";
import Button from "./Buttoncomponent";

const Registration = () => {
    const genderoptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'others', label: 'Others' }
    ];
    return (
        <div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Name' iname='name' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='DOB' iname='dob' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Age' iname='age' disable={true} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Gender' iname='gender' optionsval={genderoptions} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Phone' iname='phone' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='email' lname='Email' iname='email' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Adress' iname='address' />
                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2 check-style-reg" type="checkbox" value="" id="form2Example3cg" />
                                        <label className="form-check-label" for="form2Example3g">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div>
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Register' navigate='/login' />
                                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                        className="fw-bold text-body"><u>Login here</u></a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registration;