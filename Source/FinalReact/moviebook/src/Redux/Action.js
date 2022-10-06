import axios from 'axios';
import * as ActionTypes from "./ActionTypes";

export const UserLog = (maketrue, Username, password, navigate) => async (dispatch) => {
    dispatch({
        type: ActionTypes.LOGIN_REQUEST,
    })

    try {
        await axios.post('/api/token/', { "username": Username, "password": password })
            .then((res) => {
                dispatch({
                    type: ActionTypes.LOGIN_SUCCESS,
                    payload: res.data,
                })
                if (res.status === 200) {
                    axios.defaults.headers['Authorization'] = 'JWT ' + res?.data?.access
                    localStorage.setItem('access', res?.data?.access);
                    maketrue(true)
                    navigate('/cardview')
                }
            })
    } catch (error) {
        dispatch({
            type: ActionTypes.LOGIN_ERROR,
        })
        alert(error?.response.data.detail)
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