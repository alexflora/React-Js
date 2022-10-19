import React, { useEffect, useState } from 'react';
import '../Css/register.css';
import Input from "./CommonInput";
import Selectinput from "./Selectinput";
import Button from "./Buttoncomponent";
import Navbar from '../Layouts/Navbar'
import Footer from '../Layouts/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBranchData, getMovieData, getSeatData, postSeatData, postBookingData, getBookedData } from '../Redux/Action';
import swal from 'sweetalert';

const Booking = () => {
    const [submitdata, setsubmitdata] = useState({});
    const [seat, setseat] = useState({});
    const [amount, setamount] = useState({ 'finalamount': '' });
    const dispatch = useDispatch()
    const { getbranch, getmovie, getseat } = useSelector((state) => state.reducerResult)
    const { id } = useParams()
    const URL = id ? `api/booking/${id}/` : 'api/booking/'
    const Method = id ? 'PUT' : 'POST'


    useEffect(() => {
        dispatch(getBranchData());
        dispatch(getMovieData());
        dispatch(getSeatData());
        if (id) dispatch(getBookedData(URL, setsubmitdata));
    }, [])

    const handleonchange = (e, name) => {
        if (name) {
            setsubmitdata({ ...submitdata, [name]: e })
        }
        else {

            setsubmitdata({ ...submitdata, [e.target.name]: e.target.value })
        }
    }
    const handleSeat = (e) => {
        const seats = getseat[0].totalseat
        const movieamount = getmovie[0].amount
        if (e.target.value >= seats) {
            swal("Oops!", "Book the seats with in available seats!", "error");
        }
        else {
            // setamount({ 'finalamount': e.target.value * movieamount })
            setseat({ ...seat, ['totalseat']: seats - e.target.value })
            setsubmitdata({ ...submitdata, 'noofseats': e.target.value, 'totalamount': e.target.value * movieamount })
        }

    }

    const handleonclick = () => {
        dispatch(postSeatData(seat, getseat[0].id));
        const temp = { ...submitdata }
        temp['branch'] = temp?.branch?.id
        temp['movie'] = temp?.movie?.id
        temp['hall'] = temp?.hall?.id
        temp['halltype'] = temp?.halltype?.value
        dispatch(postBookingData(temp, URL, Method))
    }
    const halltype = [
        { value: 'a/c', label: 'A/c' },
        { value: 'normal', label: 'Normal' },
    ];
    return (
        <div>
            <Navbar />
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Booking Details</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Name' iname='customername' icfunction={handleonchange} ivalue={submitdata && submitdata.customername} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='BranchName' optionsval={getbranch} optionlabel={option => option && option.name} optionvalue={option => option && option.id} ifunction={(e) => handleonchange(e, 'branch')} selectvalue={submitdata && submitdata.branch} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='MovieName' optionsval={getmovie} optionlabel={option => option && option.name} optionvalue={option => option && option.id} ifunction={(e) => handleonchange(e, 'movie')} selectvalue={submitdata && submitdata.movie} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='HallName' optionsval={getseat} optionlabel={option => option && option.name} optionvalue={option => option && option.id} ifunction={(e) => handleonchange(e, 'hall')} selectvalue={submitdata && submitdata.hall} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='HallType' iname='halltype' optionsval={halltype} ifunction={(e) => handleonchange(e, 'halltype')} selectvalue={submitdata && submitdata.halltype} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='NumberOfSeats' iname='noofseats' icfunction={handleSeat} ivalue={submitdata?.noofseats} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='TotalAmount' iname='totalamount' disable={true} ivalue={submitdata && submitdata.totalamount} />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' navigate='/bookview' bfunction={(e) => handleonclick(e)} />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body additional-style' bname='Back' navigate='/cardview' />
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