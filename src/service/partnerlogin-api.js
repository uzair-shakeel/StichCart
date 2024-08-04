import ApiGateway from './api-gateway';

const PartnerLoginApi = {

    loginPartner: function loginPartner(partnerLoginRequest) {
        let url = `authenticatePartner`;
        return ApiGateway.post(url, partnerLoginRequest);
    }
} 

export default PartnerLoginApi;