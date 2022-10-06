import React, { useState } from 'react'
import '../Css/login.css'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { UserLog } from '../Redux/Action';
import { useDispatch } from 'react-redux';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Login = ({ maketrue }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    var [Username, setUsername] = useState('');
    var [password, setpassword] = useState('');
    const handleOnclick = () => {
        dispatch(UserLog(maketrue, Username, password, navigate))
    }

    return (
        <div>
            <Navbar />
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
                                            <input type="text" name="username" id="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label for="password" className="text-black">Password:</label><br />
                                            <input type="text" name="password" id="password" className="form-control" onChange={(e) => setpassword(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label for="remember-me" className="text-black"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <button className='btn btn-primary' onClick={handleOnclick}>Login</button>
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


// <div id="register-link" className="text-right">
// <a href="#" className="text-info">Register here</a>
// </div>