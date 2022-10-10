import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieviewData, deleteMovieData } from "../Redux/Action";
import { Link, useNavigate } from "react-router-dom";

const MovieView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { movieview } = useSelector((state) => state.reducerResult)
    const headers = ['S.No', 'Movie', 'Actor', 'Show', 'Language', 'StartDate', 'EndDate', 'Amount', 'Action']

    useEffect(() => {
        getdata()
    }, [])
    const getdata = () => {
        dispatch(getMovieviewData());

    }
    const editData = (id) => {
        navigate(`/movie/${id}/`)
    }

    const deletedate = (id) => {
        dispatch(deleteMovieData(id));
        getdata()
    }
    return (
        <Fragment>
            <div>
                <h3 class="text-justify" style={{ color: "red", fontFamily: "verdana", marginLeft: "520px" }}>Movie Details</h3>
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
                            movieview && movieview.map((res, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{res.name}</td>
                                        <td>{res.actor}</td>
                                        <td>{
                                            res && res.show.map(value => {
                                                return (
                                                    <>{value && value.name}</>
                                                )
                                            })
                                        }</td>

                                        <td>{
                                            res && res.language.map(value => {
                                                return (
                                                    <Fragment>
                                                        {
                                                            value && value.name
                                                        }
                                                    </Fragment>
                                                )
                                            })
                                        }</td>
                                        <td>{res.startdate}</td>
                                        <td>{res.enddate}</td>
                                        <td>{res.amount}</td>
                                        <td><button class="btn btn-primary" onClick={(e) => editData(res.id)}>Edit</button>
                                            <button class="btn btn-danger" onClick={(e) => deletedate(res.id)}>Delete</button></td>
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
export default MovieView;