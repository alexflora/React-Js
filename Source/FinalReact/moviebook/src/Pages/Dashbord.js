import React from 'react';
import ImageSlider from './ImageSlider';
import '../Css/dashbord.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';

const Dashbord = () => {
    const slides = [
        { url: 'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg   ', title: 'flower1' },
        { url: 'https://thumbs.dreamstime.com/b/flowers-4929984.jpg', title: 'flower2' },
        { url: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80', title: 'flower3' },
        { url: 'https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg', title: 'flower4' },
        { url: 'https://images.unsplash.com/photo-1600703136783-bdb5ea365239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80', title: 'flower5' }
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