import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerData } from "../Redux/Action";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
const CustomerView = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { customerview, postcustomer } = useSelector((state) => state.reducerResult)
    const headers = ['S.No', 'Name', 'Gender', 'DOB', 'Age', 'Phone', 'Email', 'Address', 'Action']

    useEffect(() => {
        dispatch(getCustomerData());

    }, [])
    // const editData = (id) => {
    //     navigate(`/registration/${id}/`)
    // }
    return (
        <Fragment>
            <div>
                <h3 class="text-justify" style={{ color: "red", fontFamily: "verdana", marginLeft: "520px" }}>Customer Details</h3>
                <Link to='/adminview'><button type="button" class="btn btn-warning float-left">Back</button></Link>
                <Link to='/'><button type="button" class="btn btn-warning float-rignt">BackToLogin</button></Link>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            {
                                headers.map(res => {
                                    return (

                                        <th scope="col"> {res} </th>

                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customerview && customerview.map((res, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{res.name}</td>
                                        <td>{res && res.gender.label}</td>
                                        <td>{res.dob}</td>
                                        <td>{res.age}</td>
                                        <td>{res.phone}</td>
                                        <td>{res.email}</td>
                                        <td>{res.address}</td>
                                        <td><button class="btn btn-primary" >Edit</button>
                                            <button class="btn btn-danger">Delete</button></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Fragment >
    );
}
export default CustomerView;