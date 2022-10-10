import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PaymentviewData } from "../Redux/Action";
import { Link } from 'react-router-dom'
const PaymentView = () => {
    const dispatch = useDispatch();
    const { payview } = useSelector((state) => state.reducerResult)
    const headers = ['S.No', 'Name', 'BookedMovie', 'Hall', 'HallType', 'No-Of-Seats', 'TotalAmount', 'PaidMode', 'Action']
    useEffect(() => {
        dispatch(PaymentviewData());
    }, [])
    return (
        <Fragment>
            <h3 class="text-justify" style={{ color: "red", fontFamily: "verdana", marginLeft: "520px" }}>Payment Details</h3>
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
                        payview && payview.map((res, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{res.name}</td>
                                    <td>{res && res.moviename}</td>
                                    <td>{res && res.hall}</td>
                                    <td>{res.halltype}</td>
                                    <td>{res.noofseats}</td>
                                    <td>{res.amount}</td>
                                    <td>{res && res.type.label}</td>

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
export default PaymentView;