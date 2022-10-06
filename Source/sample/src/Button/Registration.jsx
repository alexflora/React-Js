import React, { useEffect, useState } from "react";
import './Registration.css';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';
const Registraion = () => {
    useEffect(() => {
        pasyear()
        setCountry(countries);
    }, []);

    const [age, setage] = useState({});
    const [year, setyear] = useState([]);
    const [exp, setexp] = useState({ sdate: "", edate: "", result: "" });
    console.log(exp.sdate)
    console.log(exp.edate)

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    const [value, setvalue] = useState([]);


    const countries = [
        { id: '1', name: 'INDIA' },
        { id: '2', name: 'USA' }
    ];
    const states = [
        { id: '1', countryId: '1', name: 'Tamilnadu' },
        { id: '2', countryId: '1', name: 'Kerala' },
        { id: '3', countryId: '2', name: 'Californiya' },
        { id: '4', countryId: '2', name: 'Florida' }
    ];
    const cities = [
        { id: '1', stateId: '1', name: 'Chennai' },
        { id: '2', stateId: '1', name: 'Coimbatore' },
        { id: '3', stateId: '2', name: 'Thiruvananthapuram' },
        { id: '4', stateId: '2', name: 'Kochi' },
        { id: '1', stateId: '3', name: 'San Fransico' },
        { id: '2', stateId: '3', name: 'San Diego' },
        { id: '3', stateId: '4', name: 'Tampa' },
        { id: '4', stateId: '4', name: 'Miami' },


    ]

    const handleCountry = (id) => {
        const dt = states.filter(x => x.countryId === id);
        setState(dt);

    }
    const handleState = (id) => {
        const dt = cities.filter(x => x.stateId === id);
        setCity(dt);
    }

    const calAge = (event) => {
        var today = new Date();
        var dob = new Date(event.target.value)
        var val = (today > dob) ? (today.getFullYear() - dob.getFullYear()) : alert("Please give correct birthdate");
        var test = dob.getFullYear() + 18;
        var full = `${test}-${("0" + (dob.getMonth() + 1)).slice(-2)}-${("0" + dob.getDate()).slice(-2)}`
        // var full = `${test + '-' + ("0" + (dob.getMonth() + 1)).slice(-2) + '-' + ("0" + dob.getDate()).slice(-2)}`
        console.log(full)
        setage({ ...age, 'Age': val, 'hide': full });
    }
    const pasyear = () => {
        var tday = new Date();
        var pasyear = tday.getFullYear() - 5;
        var year = [];
        year.push({ 'defult': '-----' });
        for (var i = 1; i <= 10; i++) {
            year.push({ [`year${i}`]: pasyear + i })
        }

        setyear(year);
    }

    const Sdate = (event) => {
        if (event.target.name === 'edate') {
            if (exp.sdate === "") {
                alert('Please fill the start date');
                event.target.value = "";
            }
        }
        //setexp({ ...exp, [event.target.name]: (exp.sdate > exp.edate) ? alert("Please enter the start date less than end date") : new Date(event.target.value) })
        setexp({ ...exp, [event.target.name]: new Date(event.target.value) })
    }
    const Edate = (event) => {
        //var enddate = new Date(event.target.value);

        var experience = (exp.sdate > exp.edate) && exp.edate !== "" ? alert("Please enter the end date more than start date") : exp.edate.getFullYear() - exp.sdate.getFullYear()
        //var experience = enddate.getFullYear() - exp.sdate.getFullYear()
        setexp({ ...exp, result: experience });
    }

    const checkphone = (event) => {
        var phone = event.target.value;
        const phoneRegEx = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
        //const exp = / \+91^[6-9]{1}[0-9]{9}/;
        if (!phone.match(phoneRegEx)) {
            alert('please enter valid number');
        }

    }

    const checkemail = (event) => {
        if (!event.target.value.match(/^[a-z 0-9]+[@]\w+[.]\w{2,3}/)) {
            alert('Please enter the valid email')

        }
    }

    const submit = (event) => {
        if (document.getElementById('firstname').value === '') {
            alert('please enter first name')
        }
        if (document.getElementById('dob').value === '') {
            alert('please enter dob')
        }
        if (document.getElementById('gender').value === '') {
            alert('please enter gender')
        }
        if (document.getElementById('phone').value === '') {
            alert('please enter phone number')
        }
        if (document.getElementById('lastname').value === '') {
            alert('please enter lastname')
        }
        if (document.getElementById('email').value === '') {
            alert('please enter Email')
        }

        setvalue({ ...value, [event.target.name]: [event.target.value] })
        console.log(value)
    }



    return (
        <div >
            <div className="parent_container">
                <div className="nav_div_style">
                    <button className="nav_btn_style"><Link to='/home' className="ancher_style">Home</Link></button>
                    <button className="nav_btn_style"><Link to='/home' className="ancher_style">Contact</Link></button>
                    <button className="nav_btn_style"><Link to="/home" className="ancher_style">About</Link></button>
                </div>

                <header>
                    <div className="header_style">
                        <h1>Resume</h1>
                    </div>
                </header>
                <div className="grid-container">
                    <div className="grid_item">
                        <div>
                            <h2 className="head_style">Personal</h2>
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='firstname'>FirstName:</label>
                            <input className="reg_input" name='firstname' id='firstname' type={"text"} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='dob'>DOB:</label>
                            <input className="reg_input" name='dob' id='dob' type={"date"} onBlur={calAge} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='gender'>Gender:</label>
                            <select className="reg_input" id='gender'>
                                <option value="none">----</option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='phone'>Phone:</label>
                            <input className="reg_input" name='phone' id='phone' type={"text"} onBlur={checkphone} />
                        </div>

                        <hr />

                        <div>
                            <h2 className="head_style">Address</h2>
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='No'>Door No:</label>
                            <input className="reg_input" name='doorno' id='No' type={"number"} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label">State:</label>
                            <select className="reg_input" onChange={(e) => handleState(e.target.value)}>
                                <option selected>Select State</option>
                                {
                                    state &&
                                        state !== undefined ?
                                        state.map((ctr, index) => {
                                            return (
                                                <option key={index} value={ctr.id}>{ctr.name}</option>

                                            )

                                        })
                                        : 'No State'
                                }
                            </select>
                        </div>

                        <hr />

                        <div>
                            <h2 className="head_style">Education</h2>
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='collegename'>CollegeName:</label>
                            <input className="reg_input" id='collegename' />
                        </div>

                        <hr />
                        <div>
                            <h2 className="head_style">Experience</h2>
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='startdate'>StartDate:</label>
                            <input className="reg_input" id='startdate' min={age && age.hide} name='sdate' type={"date"} onChange={Sdate} onBlur={Edate} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label">Experience:</label>
                            <input className="reg_input" type={"text"} value={exp && exp.result} readOnly />
                        </div>



                    </div>
                    <div className="grid_item">
                        <div className="reg_head_div_style">
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='lastname'>LastName:</label>
                            <input className="reg_input" id='lastname' type={"text"} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" >Age:</label>
                            <input className="reg_input" type={"number"} value={age && age.Age} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label">BloodGroup:</label>
                            <input className="reg_input" type={"text"} />

                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='email'>Email:</label>
                            <input className="reg_input" onBlur={checkemail} id='email' type={"email"} />
                        </div><hr />

                        <div className="reg_head_div_style">
                        </div>

                        <div className="reg_div_style">
                            <label className="reg_label">Country:</label>
                            <select className="reg_input" onChange={(e) => handleCountry(e.target.value)}>
                                <option value='0'>Select Country</option>
                                {
                                    country &&
                                        country !== undefined ?

                                        country.map((res, index) => {
                                            // console.log({ index })
                                            // console.log(res.id)
                                            // console.log(res.name)
                                            return (
                                                <option value={res.id}>{res.name}</option>

                                            )

                                        })
                                        : 'No country'
                                }
                            </select>
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label">City:</label>
                            <select className="reg_input">
                                <option value='0'>Select City</option>
                                {
                                    city &&
                                        city !== undefined ?
                                        city.map((ctr, index) => {
                                            //key={index}
                                            return (
                                                <option value={ctr.id}>{ctr.name}</option>

                                            )

                                        })
                                        : 'No City'
                                }

                            </select>
                        </div>

                        <hr />
                        <div className="reg_head_div_style">
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='passyear'>Passyear:</label>
                            <select className="reg_input" id='passyear'>
                                {year && year.map((res) => {
                                    return (
                                        <option>{Object.values(res)}</option>
                                    )
                                })}
                            </select>

                        </div>

                        <hr />
                        <div className="reg_head_div_style">
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor='enddate'>EndDate:</label>
                            <input className="reg_input" id='enddate' name="edate" type="date" onChange={Sdate} onBlur={Edate} />
                        </div>
                        <div className="reg_div_style">
                            <label className="reg_label" htmlFor=''>EndDate:</label>
                            <DatePicker className="reg_input" />
                        </div>
                    </div>

                </div>
                <div className="btn_div">
                    <button className="btn_style">Cancel</button>
                    <button className="btn_style" onClick={submit}>Save</button>

                </div>

                <footer>
                    <p>@copyright</p>
                </footer>
            </div>
        </div>

    )
}
export default Registraion;


// const Registratio = () => {
//     return (
//         <div className="total-form">
//             <div className="divs">
//                 <label className="label_style1">name</label>
//                 <input type="text" className="input_style1" />
//             </div>
//             <div className="left">
//                 <div className="label">
//                     <p>First name</p>
//                     <p>Last name</p>
//                     <p>Gender</p>
//                     <input className='inputbox' type='checkbox' />
//                     <p>First name</p>
//                 </div>
//                 <div className="label">
//                     <input className='inputbox' type='text' />
//                     <input className='inputbox' type='text' />
//                     <p>check this box</p>
//                     <input className='inputbox' type='text' />
//                     <input className='inputbox' type='text' />
//                 </div>

//             </div>
//             <div className="left">
//                 <div className="label">
//                     <p>First name</p>
//                     <p>Last name</p>
//                     <p>Gender</p>
//                     <input className='inputbox' type='checkbox' />
//                     <p>First name</p>
//                 </div>
//                 <div className="label">
//                     <input className='inputbox' type='text' />
//                     <input className='inputbox' type='text' />
//                     <p>check this box</p>
//                     <input className='inputbox' type='text' />
//                     <input className='inputbox' type='text' />
//                 </div>

//             </div>
//         </div>
//     )
// }
