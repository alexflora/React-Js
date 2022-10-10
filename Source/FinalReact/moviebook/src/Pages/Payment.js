import React, { useState } from 'react'
import Selectinput from './Selectinput';
import Button from './Buttoncomponent';
import Input from './CommonInput';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postPaymentData } from '../Redux/Action'
import '../Css/register.css'
import swal from 'sweetalert';
const Payment = () => {
    const [submitdata, setsubmitdata] = useState({});
    const dispatch = useDispatch()
    const { postbooking } = useSelector((state) => state.reducerResult)
    console.log("Post", postbooking)
    const paymenttype = [
        { value: 'online', label: 'Online' },
        { value: 'offline', label: 'Offline' },
    ];
    const { id } = useParams()
    const URL = id ? `api/payment/${id}/` : 'api/payment/'
    const Method = id ? 'PUT' : 'POST'

    const handleonchange = (e) => {
        setsubmitdata({ ...submitdata, type: e.value, 'name': postbooking.id })
    }
    const handleonclick = (e) => {
        dispatch(postPaymentData(submitdata, URL, Method));
    }
    return (
        <div>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Payment Dtails</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='CustomerName' iname='name' ivalue={postbooking && postbooking.customername} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='PaymentType' iname='type' optionsval={paymenttype} ifunction={handleonchange} />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' bfunction={handleonclick} />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body additional-style' bname='Cancel' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;