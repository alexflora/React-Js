import React from 'react'
import '../Css/navbar.css'
import { Link } from 'react-router-dom'
const AdminNav = () => {
    const onLogout = () => {
        localStorage.clear()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-sm nav-style-color">
                <div className="navbar-collapse collapse" id="navbar2">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to='/adminview' style={{ textDecoration: "none" }}> <a className="nav-link text-white btn" href='#!'>Home</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/customerview'><a className="nav-link text-white btn" href='#!'>Coustomer</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/employeeview'><a className="nav-link text-white btn" href='#!'>Employee</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/movieview' style={{ textDecoration: "none" }}><a className="nav-link text-white btn" href='#!'>Movie</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/payview' style={{ textDecoration: "none" }}><a className="nav-link text-white btn" href='#!'>Payment</a></Link>
                        </li>
                        <li className="nav-item active">
                            <Link to='/' style={{ textDecoration: "none" }}><a className="nav-link text-white btn" href='#!' onClick={onLogout}>Logout</a></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default AdminNav;


