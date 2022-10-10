import React, { useState, useEffect, Fragment } from 'react';
import ImageSlider from './ImageSlider';
import '../Css/dashbord.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getDashbordimage } from '../Redux/Action';
const Dashbord = () => {
    const dispatch = useDispatch()
    const { dashbordimage } = useSelector((state) => state.reducerResult)
    console.log('------', dashbordimage)
    const [image, setImage] = useState([dashbordimage?.map(res => res?.movieimage)])
    console.log("image list", image)

    useEffect(() => {
        dispatch(getDashbordimage())
    }, [])


    const slides = [
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-61BZwP-I36lL1U4XWDWeUhrgEj4Yfu9VDA&usqp=CAU   ', title: 'flower1' },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfEzWrxOCFDdYFE7-dYGRyK2C3QSD2ti3jg&usqp=CAU', },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbGyPzz8fpSLd6UAmzxIrvzvu1EHD_B7M5yg&usqp=CAU', title: 'flower3' },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FKnoUEb4aFdoE88r7iYj04WB_5ViohBJMg&usqp=CAU', title: 'flower4' },
        { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDBq3KFitNFHroeo1SqQts1psLQcscnQT-3w&usqp=CAU', title: 'flower5' }
    ]
    return (
        <div>
            <Navbar />
            <div className='hole-parent-container'>
                <div className='dashbord-parent-container'>
                    <ImageSlider slides={slides} />
                </div>
            </div>
            <Footer />
        </div>


    );
}
export default Dashbord;