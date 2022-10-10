import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { getCustomerData } from "../Redux/Action";
import { Link } from 'react-router-dom'
const BookingView = () => {
    const navigate = useNavigate();
    const { postbooking } = useSelector((state) => state.reducerResult)
    const headers = ['S.No', 'Name', 'Branch', 'Hall', 'HallType', 'Movie', 'NoOfSeats', 'TotalAmount', 'Action']
    const editdata = (id) => {
        navigate(`/booking/${id}/`)
    }
    return (
        <Fragment>
            <div>
                <h3 className="text-justify" style={{ color: "red", fontFamily: "verdana", marginLeft: "520px" }}>Booking Priview Page</h3>
                <table className="table">
                    <thead className="thead-light">
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

                        <tr>
                            <td>1</td>
                            <td>{postbooking?.customername}</td>
                            <td>{postbooking?.branch.name}</td>
                            <td>{postbooking?.hall.name}</td>
                            <td>{postbooking?.halltype.label}</td>
                            <td>{postbooking?.movie.name}</td>
                            <td>{postbooking?.noofseats}</td>
                            <td>{postbooking?.totalamount}</td>
                            <td><Link to='/payment'><button className="btn btn-success" >Pay</button></Link>
                                <button class="btn btn-primary" onClick={() => editdata(postbooking.id)}>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Fragment >
    );
}
export default BookingView;

//     postbooking && postbooking.map((res, index) => {
//         return (
//             <tr>
//                 <td>{index + 1}</td>
//                 <td>{res.customername}</td>
//                 <td>{res && res.branch.name}</td>
//                 <td>{res && res.hall.name}</td>
//                 <td>{res && res.halltype.label}</td>
//                 <td>{res && res.movie.name}</td>
//                 <td>{res.noofseats}</td>
//                 <td>{res.totalamount}</td>
//                 <td><button class="btn btn-primary">Edit</button>
//                     <Link to='/payment'><button className="btn btn-success" >Pay</button></Link>
//                     <button class="btn btn-danger">Delete</button>
//                 </td>
//             </tr>

//         )
//     })
// }