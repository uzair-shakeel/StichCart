import { takeLatest, put, call } from 'redux-saga/effects';
import DeviceInfo from '../util/device-info';
import  AuthApi from '../service/auth-api';
import * as actions from '../actions/auth-action';
//import {loadCart} from '../actions/productcart-action';
import { LOGIN, REGISTER_FCM_TOKEN, ADD_PRIMARY_PHONENO, UPDATE_CUSTOMER_INFO, GET_CUSTOMER_INFO } from '../actions/auth-action'
import logger from '../util/logger';
import { CART_IDENTIFIER, USER_IDENTIFIER } from '../util/constants';

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/

function* login(action) {
  try {
    let deviceId = DeviceInfo.getUniqueId();
    let userIdentifier = localStorage.getItem(CART_IDENTIFIER);
    let authRequest = {
        "username": action.email,
        "password": '',
        "deviceid": deviceId,
        "app_id": action.appId,
        "authentication_source": action.social,
        "authentication_source_token": action.idToken,
        "authentication_source_id": action.email,
        "firstName": action.firstName,
        "lastName": action.lastName,
        "accessIdentifier": userIdentifier ? userIdentifier : ''
      };
    const response = yield call(AuthApi.authenticate, authRequest);
    localStorage.removeItem(CART_IDENTIFIER);
    localStorage.removeItem(USER_IDENTIFIER);
    //loadCart();
    yield put(actions.loginSuccess(response.data));

  } catch (error) {
    logger.recordError(error, `A failure occurred during Login API`, true);
    let resError = 'Something happened on server, pleasetry again later!';
    yield put(actions.loginFailure(resError));
  }
}

function* registerFCMToken(action) {
  let registerFCMTokenRequest = {};
  try {
      const response = yield call(AuthApi.registerFCMToken, action.loginName, action.loginType, action.fcmToken);
  } catch (error) {
    console.log(error);
    logger.recordError(error, `A failure occurred during register FCM token  ${JSON.stringify(registerFCMTokenRequest)}`, true);
  }
}

function* addPrimaryPhoneNumber(action) {
  try {
    yield put(actions.addPrimaryPhoneNumberRequest());
    yield call(AuthApi.addPrimaryPhoneNumber, action.customer.customerWrapper.id, action.phoneNumber);
    const token = yield call(AuthApi.getTokenFromCache);
    const response = yield call(AuthApi.refreshToken, token);
    yield put(actions.addPrimaryPhoneNumberSuccess(response.data));
  } catch(error) {
    console.log(error);
    yield put(actions.addPrimaryPhoneNumberFailure());
    logger.recordError(error, `A failure occurred when update primary phone number ${action.customer.customerWrapper.id} - ${action.phoneNumber}`, true)
  }
}

function* updateCustomerInfo(action) {
  try {
    yield put(actions.updateCustomerInfoRequest());
    const response = yield call(AuthApi.updateCustomerInfo, action.customerId, action.customerData);
    const customerWrapper = {"customerWrapper": {...response.data}}
    yield put(actions.updateCustomerInfoSuccess(customerWrapper));
  } catch(error) {
    console.log(error);
    yield put(actions.updateCustomerInfoFailure());
    logger.recordError(error, `A failure occurred when updateCustomerInfo ${action.customerId} - ${action.customerData}`, true)
  }
}

function* getCustomerInfo(action) {
  try {
    yield put(actions.getCustomerInfoRequest());
    const response = yield call(AuthApi.getCustomerInfo, action.customerId);
    const customerWrapper = {"customerWrapper": {...response.data}}
    yield put(actions.getCustomerInfoSuccess(customerWrapper));
  } catch(error) {
    console.log(error);
    yield put(actions.getCustomerInfoFailure());
    logger.recordError(error, `A failure occurred when getCustomerInfo ${action.customerId}`, true)
  }
}

  // Manage Authentication watch
export function* loginWatcher() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(REGISTER_FCM_TOKEN, registerFCMToken);
  yield takeLatest(ADD_PRIMARY_PHONENO, addPrimaryPhoneNumber);
  yield takeLatest(UPDATE_CUSTOMER_INFO, updateCustomerInfo);
  yield takeLatest(GET_CUSTOMER_INFO, getCustomerInfo);
}