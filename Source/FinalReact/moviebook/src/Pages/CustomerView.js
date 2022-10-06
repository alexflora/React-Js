import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerData } from "../Redux/Action";

const CustomerView = () => {
    const dispatch = useDispatch();
    const { customerview } = useSelector((state) => state.reducerResult)
    const headers = ['S.No', 'Name', 'Gender', 'DOB', 'Age', 'Phone', 'Email', 'Address', 'Action']

    useEffect(() => {
        dispatch(getCustomerData());
    }, [])
    return (
        <Fragment>
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
                                    <td>{index}</td>
                                    <td>{res.name}</td>
                                    <td>{res && res.gender.label}</td>
                                    <td>{res.dob}</td>
                                    <td>{res.age}</td>
                                    <td>{res.phone}</td>
                                    <td>{res.email}</td>
                                    <td>{res.address}</td>
                                    <td><button class="btn btn-primary">Edit</button>
                                        <button class="btn btn-danger">Delete</button></td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </Fragment >
    );
}
export default CustomerView;