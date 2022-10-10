import React, { useState, useEffect } from 'react'
import Input from './CommonInput';
import Selectinput from './Selectinput';
import Button from './Buttoncomponent';
import '../Css/register.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getTheaterData, postBranchData } from '../Redux/Action';
import { useParams, useNavigate } from 'react-router-dom';
const Branch = () => {
    const dispatch = useDispatch()
    const { theater } = useSelector((state) => state.reducerResult)
    useEffect(() => {
        dispatch(getTheaterData());
    }, [])
    const [submitdata, setsubmitdata] = useState({});

    const navigate = useNavigate()
    const { id } = useParams()
    const URL = id ? `api/branch/${id}/` : 'api/branch/'
    const Method = id ? 'PUT' : 'POST'

    const handleonchange = (e, name) => {
        if (name) {
            setsubmitdata({ ...submitdata, [name]: e })
        }
        else {
            setsubmitdata({ ...submitdata, [e.target.name]: e.target.value })
        }

    }
    const handleonclick = () => {
        console.log(submitdata)
        const tempdata = { ...submitdata };
        tempdata['theatername'] = tempdata?.theatername?.id
        dispatch(postBranchData(tempdata, navigate, URL, Method));
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
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='TheraterName' iname='theatername' optionsval={theater} optionlabel={option => option && option.name} optionvalue={option => option && option.id} ifunction={(e) => handleonchange(e, 'theatername')} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='BranchName' iname='name' icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Phone' iname='phone' icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='email' lname='Email' iname='email' icfunction={handleonchange} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Address' iname='address' icfunction={handleonchange} />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' bfunction={(e) => handleonclick(e)} />
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
export default Branch;