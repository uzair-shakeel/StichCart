import ApiGateway from './api-gateway';

const PartnerRegisterApi = {

    registerPartner: function registerPartner(partnerRegisterRequest, token) {
        let url = `enclothe-reseller/registerPartner?userName=${partnerRegisterRequest.userName}&emailAddress=${partnerRegisterRequest.emailAddress}&businessType=${partnerRegisterRequest.businessType}&addressLine1=${partnerRegisterRequest.addressLine1}&addressLine2=${partnerRegisterRequest.addressLine2}&city=${partnerRegisterRequest.addressLine3}&phoneNumber=${partnerRegisterRequest.phoneNumber}&gstNumber=${partnerRegisterRequest.gstNumber}&adhaarNumber=${partnerRegisterRequest.adhaarNumber}&postalCode=${partnerRegisterRequest.postalCode}&authToken=${token}`;
        return ApiGateway.post(url);
    }
} 

export default PartnerRegisterApi;