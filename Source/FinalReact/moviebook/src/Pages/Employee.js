import React, { useState } from 'react'
import Selectinput from './Selectinput';
import Input from './CommonInput';
import Button from './Buttoncomponent';
import '../Css/register.css';
import Navbar from "../Layouts/Navbar";
import Footer from '../Layouts/Footer';
const Employee = () => {
    const [age, setage] = useState({});
    const genderoptions = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ];
    const emptypes = [
        { value: 'manager', label: 'Manager' },
        { value: 'employee', label: 'Employee' },
    ];

    const calAge = (event) => {
        var today = new Date();
        var dob = new Date(event.target.value)
        var val = (today > dob) ? (today.getFullYear() - dob.getFullYear()) : alert("Please give correct birthdate");
        setage({ ...age, 'Age': val })
    }
    const checkPhone = (event) => {
        var phone = event.target.value;
        const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
        //const exp = / \+91^[6-9]{1}[0-9]{9}/;
        if (!phone.match(phoneRegEx)) {
            alert('Please Enter Valid Phone Number');
        }
    }
    const checkemail = (event) => {
        if (!event.target.value.match(/^[a-z 0-9]+[@]\w+[.]\w{2,3}/)) {
            alert('Please Enter the valid email')

        }
    }

    return (
        <div>
            <Navbar />
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Employee Details</h2>
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='BranchName' iname='branch' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Name' iname='name' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='date' lname='DOB' iname='dob' ibfunction={calAge} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Age' ids='age' iname='age' disable={true} ivalue={age && age.Age} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='Gender' iname='gender' optionsval={genderoptions} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Phone' iname='phone' ibfunction={checkPhone} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='email' lname='Email' iname='email' ibfunction={checkemail} />
                                    <Selectinput dclass='form-outline mb-4' lclass='form-label' iclass='react-select-style react-style1' lname='EmployeeType' iname='emptype' optionsval={emptypes} />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Aaddhar No' iname='aadharno' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Experience' iname='experience ' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='AccountNo' iname='accountno' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='number' lname='Salery' iname='salary' />
                                    <Input dclass='form-outline mb-4' lclass='form-label' iclass='form-control form-control-lg' itype='text' lname='Address' ids='address' iname='address' />
                                    <Button dclass='d-flex justify-content-center' btype='button' bclass='btn btn-success btn-block btn-lg gradient-custom-4 text-body' bname='Submit' />
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
export default Employee;