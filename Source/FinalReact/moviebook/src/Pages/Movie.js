import React, { useEffect, useState } from 'react'
import Input from './CommonInput';
import Selectinput from './Selectinput';
import Button from './Buttoncomponent';
import '../Css/register.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getShowData, getLanguageDate, postMovieData, getMovieEditData } from '../Redux/Action';
const Movie = () => {
    const [submitdata, setsubmitdata] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { getshow, getlanguage } = useSelector((state) => state.reducerResult)

    const { id } = useParams()
    const URL = id ? `api/movie/${id}/` : 'api/movie/'
    const Method = id ? 'PUT' : 'POST'
    useEffect(() => {
        dispatch(getShowData())
        dispatch(getLanguageDate())
        if (id) dispatch(getMovieEditData(URL, setsubmitdata))
    }, [])


    const handleonchange = (e, name) => {
        if (name) {
            setsubmitdata({ ...submitdata, [name]: e })
        }
        else {
            setsubmitdata({ ...submitdata, [e.target.name]: e.target.value })
        }
    }
    const handleImagechange = (e) => {
        setsubmitdata({ ...submitdata, [e.target.name]: e.target.files[0] })
    }
    const handleonclick = () => {
        let tempdata = { ...submitdata }
        tempdata['show'] = tempdata?.show.id
        tempdata['language'] = tempdata?.language.id
        dispatch(postMovieData(tempdata, URL, Method, navigate))
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
                                    <h2 className="text-uppercase text-center mb-5">Movie Details</h2>
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='MovieName' iname='name' icfunction={handleonchange} ivalue={submitdata && submitdata.name} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Show' iname='show' optionsval={getshow} optionlabel={option => option && option.name} optionvalue={option => option && option.id} ifunction={(e) => handleonchange(e, 'show')} selectvalue={submitdata && submitdata.show} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Language' iname='language' optionsval={getlanguage} optionlabel={option => option && option.name} optionvalue={option => option && option.id} ifunction={(e) => handleonchange(e, 'language')} selectvalue={submitdata && submitdata.language} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Actor Name' iname='actor' icfunction={handleonchange} ivalue={submitdata && submitdata.actor} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='StartDate' iname=' startdate' icfunction={handleonchange} ivalue={submitdata && submitdata.startdate} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='EndDate' iname='enddate' icfunction={handleonchange} ivalue={submitdata && submitdata.enddate} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='file' lname='MovieImage' iname='movieimage' icfunction={handleImagechange} image={submitdata?.movieimage} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Price' iname='amount' icfunction={handleonchange} ivalue={submitdata && submitdata.amount} />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' bfunction={(e) => handleonclick(e)} navigate='/movieview' />
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