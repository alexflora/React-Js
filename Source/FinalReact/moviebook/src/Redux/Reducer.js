import * as ActionTypes from "./ActionTypes";

const initialState = {
    value: 0,
    data: ""
};

export const CommonReducer = function (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                data: action.payload
            };
        case ActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.CUSTOMER_VIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.CUSTOMER_VIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                customerview: action.payload
            };
        case ActionTypes.CUSTOMER_VIEW_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.EMPLOYEE_VIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.EMPLOYEE_VIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                employeeview: action.payload
            };
        case ActionTypes.EMPLOYEE_VIEW_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.MOVIE_VIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.MOVIE_VIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                movieview: action.payload
            };
        case ActionTypes.MOVIE_VIEW_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.PAY_VIEW_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.PAY_VIEW_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                payview: action.payload
            };
        case ActionTypes.PAY_VIEW_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.THEATER_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.THEATER_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                theater: action.payload
            };
        case ActionTypes.THEATER_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.BRANCH_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.BRANCH_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                postbranch: action.payload
            };
        case ActionTypes.BRANCH_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.BRANCH_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.BRANCH_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                getbranch: action.payload
            };
        case ActionTypes.BRANCH_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.MOVIE_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.MOVIE_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                getmovie: action.payload
            };
        case ActionTypes.MOVIE_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.SEAT_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.SEAT_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                getseat: action.payload
            };
        case ActionTypes.SEAT_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.SEAT_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.SEAT_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                postseat: action.payload
            };
        case ActionTypes.SEAT_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.BOOKING_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.BOOKING_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                postbooking: action.payload
            };
        case ActionTypes.BOOKING_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.BOOKING_EDIT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.BOOKING_EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                editbooking: action.payload
            };
        case ActionTypes.BOOKING_EDIT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.PAYMENT_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.PAYMENT_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                postpayment: action.payload
            };
        case ActionTypes.PAYMENT_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.SHOW_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.SHOW_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                getshow: action.payload
            };
        case ActionTypes.SHOW_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.LANGUAGE_GET_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.LANGUAGE_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                getlanguage: action.payload
            };
        case ActionTypes.LANGUAGE_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.MOVIE_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.MOVIE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                postmovie: action.payload
            };
        case ActionTypes.MOVIE_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.MOVIE_EDIT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.MOVIE_EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                editmovie: action.payload
            };
        case ActionTypes.MOVIE_EDIT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };
        case ActionTypes.MOVIE_DELETE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.MOVIE_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                deletemovie: action.payload
            };
        case ActionTypes.MOVIE_DELETE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.CUSTOMER_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.CUSTOMER_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                postcustomer: action.payload
            };
        case ActionTypes.CUSTOMER_POST_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.CUSTOMER_EDIT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.CUSTOMER_EDIT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                editcustomer: action.payload
            };
        case ActionTypes.CUSTOMER_EDIT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };

        case ActionTypes.DASHBORD_IMAGE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: false,
                success: false,
            };
        case ActionTypes.DASHBORD_IMAGE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false,
                success: true,
                dashbordimage: action.payload
            };
        case ActionTypes.DASHBORD_IMAGE_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
                success: false,
            };





        default:
            return state
    }
}