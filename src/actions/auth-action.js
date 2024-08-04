export const CUSTOMER = 'customer?email='
export const LOGIN = 'LOGIN'
export const LOGINSUCCESS = 'LOGINSUCCESS'
export const LOGINFAILURE = 'LOGINFAILURE'
export const INVALIDATE_LOGIN_INFO = 'LOGINFAILURE'
export const DESTROY_SESSION = 'DESTROY_SESSION'
export const SET_FCM_TOKEN = 'SET_FCM_TOKEN'
export const REGISTER_FCM_TOKEN = 'REGISTER_FCM_TOKEN'
export const ADD_PRIMARY_PHONENO = 'ADD_PRIMARY_PHONENO'
export const ADD_PRIMARY_PHONENO_REQUEST = 'ADD_PRIMARY_PHONENO_REQUEST'
export const ADD_PRIMARY_PHONENO_SUCCESS = 'ADD_PRIMARY_PHONENO_SUCCESS'
export const ADD_PRIMARY_PHONENO_FAILURE = 'ADD_PRIMARY_PHONENO_FAILURE'
export const UPDATE_CUSTOMER_INFO = 'UPDATE_CUSTOMER_INFO'
export const UPDATE_CUSTOMER_INFO_REQUEST = 'UPDATE_CUSTOMER_INFO_REQUEST'
export const UPDATE_CUSTOMER_INFO_SUCCESS = 'UPDATE_CUSTOMER_INFO_SUCCESS'
export const UPDATE_CUSTOMER_INFO_FAILURE = 'UPDATE_CUSTOMER_INFO_FAILURE'
export const GET_CUSTOMER_INFO = 'GET_CUSTOMER_INFO'
export const GET_CUSTOMER_INFO_REQUEST = 'GET_CUSTOMER_INFO_REQUEST'
export const GET_CUSTOMER_INFO_SUCCESS = 'GET_CUSTOMER_INFO_SUCCESS'
export const GET_CUSTOMER_INFO_FAILURE = 'GET_CUSTOMER_INFO_FAILURE'


export function login(appId, social, deviceId, email, idToken, firstName, lastName) {
    return {
        type: LOGIN,
        appId,
        social,
        deviceId,
        email,
        idToken, 
        firstName, 
        lastName
    };
}

export function loginSuccess(user) {
    return {
        type: LOGINSUCCESS,
        user
    };
}

export function loginFailure(error) {
    return {
        type: LOGINFAILURE,
        error
    };
}

export function invalidateLoginInfo() {
    return {
        type: INVALIDATE_LOGIN_INFO
    };
}

export function destroySession() {
    return {
        type: DESTROY_SESSION
    };
}

export function setFCMToken(fcmToken) {
    return {
        type: SET_FCM_TOKEN,
        fcmToken
    };
}

export function registerFCMToken(loginName, loginType, fcmToken) {
    return {
        type: REGISTER_FCM_TOKEN,
        loginName,
        loginType,
        fcmToken
    };
}

export function addPrimaryPhoneNumber(customer, phoneNumber) {
    return {
        type: ADD_PRIMARY_PHONENO,
        customer,
        phoneNumber
    } 
}

export function addPrimaryPhoneNumberRequest(user) {
    return {
        type: ADD_PRIMARY_PHONENO_REQUEST,
        user
    };
}

export function addPrimaryPhoneNumberSuccess(user) {
    return {
        type: ADD_PRIMARY_PHONENO_SUCCESS,
        user
    };
}

export function addPrimaryPhoneNumberFailure(error) {
    return {
        type: ADD_PRIMARY_PHONENO_FAILURE,
        error
    };
}

export function updateCustomerInfo(customerId, customerData) {
    return {
        type: UPDATE_CUSTOMER_INFO,
        customerId,
        customerData
    } 
}

export function updateCustomerInfoRequest() {
    return {
        type: UPDATE_CUSTOMER_INFO_REQUEST
    } 
}

export function updateCustomerInfoSuccess(user) {
    return {
        type: UPDATE_CUSTOMER_INFO_SUCCESS,
        user
    };
}

export function updateCustomerInfoFailure(error) {
    return {
        type: UPDATE_CUSTOMER_INFO_FAILURE,
        error
    };
}

export function getCustomerInfo(customerId) {
    return {
        type: GET_CUSTOMER_INFO,
        customerId
    } 
}

export function getCustomerInfoRequest() {
    return {
        type: GET_CUSTOMER_INFO_REQUEST
    } 
}

export function getCustomerInfoSuccess(user) {
    return {
        type: GET_CUSTOMER_INFO_SUCCESS,
        user
    };
}

export function getCustomerInfoFailure(error) {
    return {
        type: GET_CUSTOMER_INFO_FAILURE,
        error
    };
}