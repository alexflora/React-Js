import React, { useState } from 'react'
import '../Css/login.css'
// import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
// import swal from 'sweetalert';
import { UserLog } from '../Redux/Action';
import { useDispatch } from 'react-redux';
// import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Login = ({ maketrue }) => {
    const [username, setusername] = useState("");
    const [Password, setpassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Handlesubmit = (event) => {
        console.log("Success")
        dispatch(UserLog(maketrue, username, Password, navigate))
    }
    return (
        <div>
            <div className='login-parent-container'>
                <div id="login">
                    <h3 className="text-center text-black pt-5">Login form</h3>
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <div id="login-form" className="form">
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label for="username" className="text-black">Username:</label><br />
                                            <input type="text" name="email" id="username" className="form-control" onChange={(e) => setusername(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label for="password" className="text-black">Password:</label><br />
                                            <input type="text" name="password" id="password" className="form-control" onChange={(e) => setpassword(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <div>
                                                <button className='btn btn-primary' onClick={Handlesubmit} style={{ float: 'left' }}>SignIn</button>
                                                <Link to='/registration'><button className='btn btn-primary' style={{ float: 'right' }}>SingnUp</button></Link>
                                            </div>
                                        </div>

                                    </div>
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
export default Login;