import React, { useState, useEffect } from "react";
import '../Css/register.css'
import Input from "./CommonInput";
import Selectinput from "./Selectinput";
import Button from "./Buttoncomponent";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postCustometData, getEditCustomerData } from "../Redux/Action";
import swal from "sweetalert";
const Registration = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { postcustomer } = useSelector((state) => state.reducerResult)
    const [age, setage] = useState({});
    const [submitdata, setsubmitdata] = useState({});

    const { id } = useParams()
    const URL = id ? `api/customer/${id}/` : 'api/customer/'
    const Method = id ? 'PUT' : 'POST'

    useEffect(() => {
        if (id) dispatch(getEditCustomerData(URL, setsubmitdata, navigate))
    }, [])

    const handleonchange = (e, name) => {
        if (name) {
            setsubmitdata({ ...submitdata, [name]: e })
        }
        else {
            setsubmitdata({ ...submitdata, [e.target.name]: e.target.value })

        }
    }
    const handleonclick = (e) => {
        console.log("submit", submitdata)
        let temp = { ...submitdata }
        temp['gender'] = temp?.gender?.value
        console.log("before action", submitdata)
        dispatch(postCustometData(URL, Method, temp, navigate))
    }

    const genderoptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'others', label: 'Others' }
    ];
    const calAge = (event) => {
        var today = new Date();
        var dob = new Date(event.target.value)
        var val = (today > dob) ? (today.getFullYear() - dob.getFullYear()) : alert("Please give correct birthdate");
        setage({ ...age, 'Age': val })
    }

    const checkPhone = (event) => {
        var phone = event.target.value;
        const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
        //const exp = / \+91^[6-9]{1}[0-9]{9}/;
        if (!phone.match(phoneRegEx)) {
            alert('Please Enter Valid Phone Number');
        }
    }
    const checkemail = (event) => {
        if (!event.target.value.match(/^[a-z 0-9]+[@]\w+[.]\w{2,3}/)) {
            alert('Please Enter the valid email')

        }
    }

    return (
        <div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Name' iname='name' icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='DOB' iname='dob' ibfunction={calAge} icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Age' iname='age' disable={true} ivalue={age && age.Age} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Gender' iname='gender' optionsval={genderoptions} ifunction={(e) => handleonchange(e, 'gender')} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Phone' iname='phone' ibfunction={checkPhone} icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='email' lname='Email' iname='email' ibfunction={checkemail} icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Adress' iname='address' icfunction={handleonchange} />
                                    <div className="form-check d-flex justify-content-center mb-5">
                                        <input className="form-check-input me-2 check-style-reg" type="checkbox" value="" id="form2Example3cg" />
                                        <label className="form-check-label" for="form2Example3g">
                                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                                        </label>
                                    </div>
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Register' bfunction={(e) => handleonclick(e)} />
                                    <Link to='/'> <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                        className="fw-bold text-body"><u>Login here</u></a></p></Link>

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