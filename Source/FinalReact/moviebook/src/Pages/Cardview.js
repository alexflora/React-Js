import React from "react";
import { Link } from 'react-router-dom'
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
import { useSelector } from "react-redux";
const Cardview = () => {
    const { dashbordimage } = useSelector((state) => state.reducerResult)
    return (
        <div>
            <Navbar />
            <div style={{ marginTop: '30px' }}>
                <div class="row">
                    {
                        dashbordimage.map((res) => {
                            return (
                                <div class="col-sm-3" style={{ marginLeft: "120px" }}>
                                    <div class="thumb-wrapper">
                                        <span class="wish-icon">
                                            <i class="fa fa-heart-o"></i>
                                        </span>
                                        <div class="img-box">
                                            <img
                                                style={{ width: "200px", height: "200px", borderRadius: "10px" }}

                                                src={res?.movieimage}
                                                class="img-fluid"
                                                alt="Speaker"
                                            />
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{res?.name}</h4>
                                            <p class="item-price">
                                                <span>Rs.{res?.amount}</span>
                                            </p>
                                            <Link to='/booking'><button class="btn btn-primary" style={{ marginBottom: "20px" }}>
                                                book Here
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

