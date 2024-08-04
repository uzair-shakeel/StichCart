import ApiGateway from './api-gateway';

const AuthApi = {

    authenticate: function authenticate(authRequest) {
        let url = `authenticateRegister`;
        return ApiGateway.post(url, authRequest);
    },

    registerFCMToken: function registerFCMToken(loginName, loginType, fcmToken) {
        let url = `fcm/registerToken?loginName=${loginName}&loginType=${loginType}&fcmToken=${fcmToken}`;
        return ApiGateway.post(url);
    },

    addPrimaryPhoneNumber: function addPrimaryPhoneNumber(customerId, primaryPhoneNumber) {
        let url = `enclothe-customer/addPhoneNumber?customerId=${customerId}&phoneNumber=${primaryPhoneNumber}`;
        // console.log('url', url);
        return ApiGateway.put(url,{});
    },

    refreshToken: function refreshToken(token) {
        var url = `refreshToken?token=${token}`;
        return ApiGateway.post(url);
    },

    getTokenFromCache: function getTokenFromCache(){
        return ApiGateway.getToken();
    },

    updateCustomerInfo: function updateCustomerInfo(customerId, customerData) {
        let url = `enc-customer/${customerId}`;
        return ApiGateway.put(url, customerData);
    },

    getCustomerInfo: function getCustomerInfo(customerId) {
        let url = `enc-customer/customers/${customerId}`;
        return ApiGateway.get(url);
    }
} 

export default AuthApi;