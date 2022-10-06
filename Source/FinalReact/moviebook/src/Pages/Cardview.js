import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Cardview = () => {
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
            <div style={{ marginTop: '20px' }}>
                <div class="row">
                    {
                        slides.map((res) => {
                            return (
                                <div class="col-sm-3" style={{ marginLeft: "120px" }}>
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon">
                                            <i class="fa fa-heart-o"></i>
                                        </span>
                                        <div class="img-box">
                                            <img
                                                style={{ width: "200px", height: "200px" }}

                                                src={'https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512__340.jpg'}
                                                class="img-fluid"
                                                alt="Speaker"
                                            />
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{'Alexander'}</h4>
                                            <p class="item-price">
                                                <span>Rs.{'200'}</span>
                                            </p>
                                            <Link to='/booking'><button class="btn btn-primary" style={{ marginBottom: "20px" }}>
                                                booking
                                            </button></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Cardview;

