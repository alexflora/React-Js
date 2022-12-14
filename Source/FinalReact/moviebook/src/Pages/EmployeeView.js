import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeData } from "../Redux/Action";
import { Link } from "react-router-dom";
const EmployeeView = () => {
    const dispatch = useDispatch();
    const { employeeview } = useSelector((state) => state.reducerResult)
    const headers = ['S.No', 'Name', 'Gender', 'DOB', 'Age', 'Phone', 'Email', 'AccountNo', 'Salary', 'Role', 'Working Place', 'Action']
    useEffect(() => {
        dispatch(getEmployeeData());
    }, [])
    return (
        <Fragment>
            <h3 class="text-justify" style={{ color: "red", fontFamily: "verdana", marginLeft: "520px" }}>Employee Details</h3>
            <Link to='/adminview'><button type="button" class="btn btn-warning float-left">Back</button></Link>
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
                        employeeview && employeeview.map((res, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{res.name}</td>
                                    <td>{res && res.gender.label}</td>
                                    <td>{res.dob}</td>
                                    <td>{res.age}</td>
                                    <td>{res.phone}</td>
                                    <td>{res.email}</td>
                                    <td>{res.accountno}</td>
                                    <td>{res.salary}</td>
                                    <td>{res.role.value}</td>
                                    <td>{res && res.branch.value}</td>

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
export default EmployeeView;