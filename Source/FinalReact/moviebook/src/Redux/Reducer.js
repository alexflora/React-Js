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

        default:
            return state
    }
}