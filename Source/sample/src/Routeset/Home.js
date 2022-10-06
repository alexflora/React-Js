import React, { Fragment, useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';


function Test() {
    const [value, setvalue] = useState();
    const [country, setcountry] = useState([]);
    const [input, setinput] = useState({});
    const [statevalue, setstatevalue] = useState([]);
    console.log(input)
    useEffect(() => {
        getStudentData()
        getCountryData()
        getStateData()

    }, [])
    const getStudentData = () => {
        axios.get("master/api/Student/")
            .then(function (response) {
                console.log(response)
                setvalue(response.data)
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }
    const getCountryData = () => {
        axios.get("config/api/Country/")
            .then(function (response) {
                // console.log(response)
                setcountry(response.data)
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }

    const getStateData = () => {
        axios.get("config/api/State/")
            .then(response => {
                console.log(response)
                setstatevalue(response.data)
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    const inputData = (e) => {
        if (e.target.name === 'country') {
            setinput({ ...input, [e.target.name]: parseInt(e.target.value) })
        } else
            setinput({ ...input, [e.target.name]: e.target.value })

    }

    const handleSubmit = () => {
        axios.post(`config/api/State/`, input)
            .then(res => {
                console.log("res", res);
            })
            .catch(err => {
                console.log(err.res)
            })
    }


    return (
        <div>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            {
                                value && Object.keys(value[0]).map((head, index) => {
                                    return (
                                        <th key={`head-${index}`}> {head}</th>
                                    )
                                })
                            }

                        </tr>
                    </thead>
                    <tbody>

                        {
                            value && value.map((res, index) => {
                                return (
                                    <Fragment key={`map-${index}`}
                                    >
                                        <tr>
                                            <td>{res.id}</td>
                                            <td>{res.Name}</td>
                                            <td>{res.Age}</td>
                                            <td>{res.Gender}</td>
                                            <td>{res.birthdate}</td>
                                            <td>{res.Phone}</td>
                                            <td>{res.email}</td>
                                            <td>{res.image}</td>
                                            <td>{res.department}</td>
                                            <td>{res.MotherLanguage}</td>
                                            <td>{res.country}</td>
                                            <td>{res.state}</td>

                                        </tr>
                                    </Fragment>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <div>
                    <label >State Name</label>
                    <input name='state' type={"text"} onChange={(e) => inputData(e)} />
                </div><br />
                <div>
                    <label>State code</label>
                    <input name='code' type={"text"} onChange={(e) => inputData(e)} />
                </div><br />
                <div>
                    <label>Country</label>
                    <select name='country' onChange={(e) => inputData(e)}>
                        <option>---select---</option>
                        {
                            country && country.map((res, index) => {
                                return (
                                    <Fragment key={index}>
                                        <option value={res.id}>{res.country}</option>
                                    </Fragment>
                                )
                            })
                        }
                    </select><br />
                </div>
                <div>
                    <button onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>

            </div>


        </div>
    )
}
export default Test;

// {
//     value && Object.keys(value?.[0])?.map((head, index) => {
//         return (

//             <th key={`head-${index}`}> {head}</th>

//         )
//     })

// }



// <div>
//                 <table border={1}>
//                     <thead>
//                         <tr>
//                             {
//                                 value && Object.keys(value[0]).map((head, index) => {
//                                     return (
//                                         <th key={`head-${index}`}> {head}</th>
//                                     )
//                                 })
//                             }

//                         </tr>
//                     </thead>
//                     <tbody>

//                         {
//                             value && value.map((res, index) => {
//                                 return (
//                                     <Fragment key={`map-${index}`}
//                                     >
//                                         <tr>
//                                             <td>{res.id}</td>
//                                             <td>{res.Name}</td>
//                                             <td>{res.Age}</td>
//                                             <td>{res.Gender}</td>
//                                             <td>{res.birthdate}</td>
//                                             <td>{res.Phone}</td>
//                                             <td>{res.email}</td>
//                                             <td>{res.image}</td>
//                                             <td>{res.department}</td>
//                                             <td>{res.MotherLanguage}</td>
//                                             <td>{res.country}</td>
//                                             <td>{res.state}</td>

//                                         </tr>
//                                     </Fragment>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
