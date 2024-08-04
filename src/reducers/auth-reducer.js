import { LOGIN, LOGINSUCCESS, LOGINFAILURE, INVALIDATE_LOGIN_INFO, SET_FCM_TOKEN, ADD_PRIMARY_PHONENO, ADD_PRIMARY_PHONENO_SUCCESS, ADD_PRIMARY_PHONENO_FAILURE, ADD_PRIMARY_PHONENO_REQUEST, UPDATE_CUSTOMER_INFO, UPDATE_CUSTOMER_INFO_REQUEST, UPDATE_CUSTOMER_INFO_SUCCESS, UPDATE_CUSTOMER_INFO_FAILURE, GET_CUSTOMER_INFO, GET_CUSTOMER_INFO_REQUEST, GET_CUSTOMER_INFO_SUCCESS, GET_CUSTOMER_INFO_FAILURE } from '../actions/auth-action'

function authReducers(prevState = { isLoading: false, addPhoneNoLoading: false }, action) {
    switch (action.type) {
        case LOGIN:
            return { ...prevState, isLoginLoading: true, loginSuccess: false };
        case LOGINSUCCESS:
            return { ...prevState, isLoginLoading: false, user: action.user, error: null, loginSuccess: true };
        case LOGINFAILURE:
            return { ...prevState, isLoginLoading: false, user: null, error: action.error, loginSuccess: false };
        case INVALIDATE_LOGIN_INFO:
            return { ...prevState, isLoading: false, user: null, error: null };
        case SET_FCM_TOKEN:
            return { ...prevState, fcmToken: action.fcmToken };
        case ADD_PRIMARY_PHONENO:
            return { ...prevState, addPhoneNoLoading: true }
        case ADD_PRIMARY_PHONENO_REQUEST:
            return { ...prevState, addPhoneNoLoading: true }
        case ADD_PRIMARY_PHONENO_SUCCESS:
            return { ...prevState, addPhoneNoLoading: false, user: action.user }
        case ADD_PRIMARY_PHONENO_FAILURE:
            return { ...prevState, addPhoneNoLoading: false, error: action.error }
        case UPDATE_CUSTOMER_INFO:
            return { ...prevState, isUpdateCustomerInfoLoading: true }
        case UPDATE_CUSTOMER_INFO_REQUEST:
            return { ...prevState, isUpdateCustomerInfoLoading: true }
        case UPDATE_CUSTOMER_INFO_SUCCESS:
            return { ...prevState, isUpdateCustomerInfoLoading: false, userDetail: action.user }
        case UPDATE_CUSTOMER_INFO_FAILURE:
            return { ...prevState, isUpdateCustomerInfoLoading: false, error: action.error }
        case GET_CUSTOMER_INFO:
            return { ...prevState, isGetCustomerInfoLoading: true }
        case GET_CUSTOMER_INFO_REQUEST:
            return { ...prevState, isGetCustomerInfoLoading: true }
        case GET_CUSTOMER_INFO_SUCCESS:
            return { ...prevState, isGetCustomerInfoLoading: false, userDetail: action.user }
        case GET_CUSTOMER_INFO_FAILURE:
            return { ...prevState, isGetCustomerInfoLoading: false, error: action.error }
        default:
            return prevState;
    }
}

export default authReducers;