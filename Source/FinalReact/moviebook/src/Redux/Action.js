import axios from 'axios';
import * as ActionTypes from "./ActionTypes";
import swal from 'sweetalert';

export const UserLog = (maketrue, username, Password, navigate) => async (dispatch) => {
    dispatch({
        type: ActionTypes.LOGIN_REQUEST,
    })

    try {
        await axios.post('/api/token/', { "email": username, "password": Password })
            .then((res) => {
                dispatch({
                    type: ActionTypes.LOGIN_SUCCESS,
                    payload: res.data,
                })
                if (res?.status === 200) {

                    axios.defaults.headers['Authorization'] = 'JWT ' + res?.data?.access;
                    localStorage.setItem('access', res?.data?.access);
                    localStorage.setItem('role', res?.data?.role);
                    maketrue(true);
                    swal("Good job!", "You Successfully Login", "success");
                    if (res?.data?.role === "Manager")
                        navigate('/adminview');
                    else {
                        navigate(`/dashbord/${res && res.data.id}/`)
                    }
                }

            })
    } catch (error) {
        dispatch({
            type: ActionTypes.LOGIN_ERROR,
        })
        swal("Opps!", error?.response.data.detail, "error")
    }
}

export const getCustomerData = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.CUSTOMER_VIEW_REQUEST
    })

    try {
        await axios.get('api/customer/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.CUSTOMER_VIEW_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.CUSTOMER_VIEW_ERROR
        })
    }
}


export const getEmployeeData = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.EMPLOYEE_VIEW_REQUEST
    })

    try {
        await axios.get('api/employee/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.EMPLOYEE_VIEW_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.EMPLOYEE_VIEW_ERROR
        })
    }
}

export const getMovieviewData = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.MOVIE_VIEW_REQUEST
    })

    try {
        await axios.get('api/movie/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.MOVIE_VIEW_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.MOVIE_VIEW_ERROR
        })
    }
}


export const PaymentviewData = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.PAY_VIEW_REQUEST
    })

    try {
        await axios.get('api/payment/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.PAY_VIEW_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.PAY_VIEW_ERROR
        })
    }
}


export const getTheaterData = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.THEATER_GET_REQUEST
    })

    try {
        await axios.get('api/theater/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.THEATER_GET_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.THEATER_GET_ERROR
        })
    }
}

export const postBranchData = (tempdata, navigate, URL, Method) => async (dispatch) => {
    dispatch({
        type: ActionTypes.BRANCH_POST_REQUEST
    })

    try {
        await axios(URL, { method: Method, data: tempdata })
            .then((res) => {
                dispatch({
                    type: ActionTypes.BRANCH_POST_SUCCESS,
                    payload: res.data,
                })
                navigate('/')
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.BRANCH_POST_ERROR
        })
    }
}

export const getBranchData = () => async (dispatch) => {

    dispatch({
        type: ActionTypes.BRANCH_GET_REQUEST
    })

    try {
        await axios('api/branch/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.BRANCH_GET_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.BRANCH_GET_ERROR
        })
    }
}


export const getMovieData = () => async (dispatch) => {

    dispatch({
        type: ActionTypes.MOVIE_GET_REQUEST
    })

    try {
        await axios.get('api/movie/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.MOVIE_GET_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.MOVIE_GET_ERROR
        })
    }
}

export const getSeatData = () => async (dispatch) => {

    dispatch({
        type: ActionTypes.SEAT_GET_REQUEST
    })

    try {
        await axios('api/hall/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.SEAT_GET_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.SEAT_GET_ERROR
        })
    }
}

export const postSeatData = (seat, id) => async (dispatch) => {

    dispatch({
        type: ActionTypes.SEAT_POST_REQUEST
    })

    try {
        await axios.patch(`api/hall/${id}/`, seat)
            .then((res) => {
                dispatch({
                    type: ActionTypes.SEAT_POST_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.SEAT_POST_ERROR
        })
    }
}


export const postBookingData = (temp, URL, Method) => async (dispatch) => {

    dispatch({
        type: ActionTypes.BOOKING_POST_REQUEST
    })

    try {
        await axios(URL, { method: Method, data: temp })
            .then((res) => {
                console.log("temp", res.data)
                dispatch({
                    type: ActionTypes.BOOKING_POST_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.BOOKING_POST_ERROR
        })
    }
}

export const getBookedData = (URL, setsubmitdata) => async (dispatch) => {

    dispatch({
        type: ActionTypes.BOOKING_EDIT_REQUEST
    })

    try {
        await axios(URL)
            .then((res) => {
                dispatch({
                    type: ActionTypes.BOOKING_EDIT_SUCCESS,
                    payload: res.data,
                })
                setsubmitdata(res.data)
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.BOOKING_EDIT_ERROR
        })
    }
}
export const postPaymentData = (dublicate, URL, Method) => async (dispatch) => {

    dispatch({
        type: ActionTypes.PAYMENT_POST_REQUEST
    })

    try {
        await axios(URL, { method: Method, data: dublicate })
            .then((res) => {
                dispatch({
                    type: ActionTypes.PAYMENT_POST_SUCCESS,
                    payload: res.data,
                })
                swal("Success", "Your Amount Recived", "success")
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.PAYMENT_POST_ERROR
        })
        swal("Opps!", "Somthing went wrong ,try again", "error")
    }
}

export const getShowData = () => async (dispatch) => {

    dispatch({
        type: ActionTypes.SHOW_GET_REQUEST
    })

    try {
        await axios.get('api/show/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.SHOW_GET_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.SHOW_GET_ERROR
        })
    }
}

export const getLanguageDate = () => async (dispatch) => {

    dispatch({
        type: ActionTypes.LANGUAGE_GET_REQUEST
    })

    try {
        await axios.get('api/language/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.LANGUAGE_GET_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.LANGUAGE_GET_ERROR
        })
    }
}

export const postMovieData = (tempdata, URL, Method, navigate) => async (dispatch) => {

    dispatch({
        type: ActionTypes.MOVIE_POST_REQUEST
    })

    try {
        await axios(URL, {
            method: Method, data: tempdata, headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log("moveie post :", res.data)
                dispatch({
                    type: ActionTypes.MOVIE_POST_SUCCESS,
                    payload: res.data,
                })
                navigate('/movieview')
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.MOVIE_POST_ERROR
        })
    }
}


export const getMovieEditData = (URL, setsubmitdata) => async (dispatch) => {

    dispatch({
        type: ActionTypes.MOVIE_EDIT_REQUEST
    })

    try {
        await axios(URL)
            .then((res) => {
                dispatch({
                    type: ActionTypes.MOVIE_EDIT_SUCCESS,
                    payload: res.data,
                })
                setsubmitdata(res.data)
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.MOVIE_EDIT_ERROR
        })
    }
}

export const deleteMovieData = (id) => async (dispatch) => {

    dispatch({
        type: ActionTypes.MOVIE_DELETE_REQUEST
    })

    try {
        await axios.delete(`api/movie/${id}/`)
            .then((res) => {
                dispatch({
                    type: ActionTypes.MOVIE_DELETE_SUCCESS,
                    payload: res.data,
                })
                swal("Deleted", "Movie Deleted Successfully", "sucess")
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.MOVIE_DELETE_ERROR
        })
        swal("Deleted", "Opps! something went worg", "error")

    }
}


export const postCustometData = (URL, Method, temp, navigate) => async (dispatch) => {
    dispatch({
        type: ActionTypes.CUSTOMER_POST_REQUEST
    })

    try {
        await axios(URL, { method: Method, data: temp })
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: ActionTypes.CUSTOMER_POST_SUCCESS,
                    payload: res.data,
                })
                navigate('/customerview')
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.CUSTOMER_POST_ERROR
        })

    }
}


export const getEditCustomerData = (URL, setsubmitdata) => async (dispatch) => {
    dispatch({
        type: ActionTypes.CUSTOMER_EDIT_REQUEST
    })

    try {
        await axios(URL)
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: ActionTypes.CUSTOMER_EDIT_SUCCESS,
                    payload: res.data,
                })
                setsubmitdata(res.data)
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.CUSTOMER_EDIT_ERROR
        })

    }
}

export const getDashbordimage = () => async (dispatch) => {
    dispatch({
        type: ActionTypes.DASHBORD_IMAGE_REQUEST
    })

    try {
        await axios.get('api/movie/')
            .then((res) => {
                dispatch({
                    type: ActionTypes.DASHBORD_IMAGE_SUCCESS,
                    payload: res.data,
                })
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.DASHBORD_IMAGE_ERROR
        })

    }
}