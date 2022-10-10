import React from 'react'
import '../Css/navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const onlogout = () => {
        localStorage.clear()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm nav-style-color">
                <div className="navbar-collapse collapse" id="navbar2">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/' style={{ textDecoration: "none" }}> <a className="nav-link text-white btn" href='#!'> Home</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/cardview' style={{ textDecoration: "none" }}><a className="nav-link text-white btn" href='#!'>Movies</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/' style={{ textDecoration: "none" }}><a className="nav-link text-white btn" href='#!' onClick={onlogout}>Logout</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;


