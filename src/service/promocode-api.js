import ApiGateway from './api-gateway';

const PromoCodeApi = {

    sendPromoCode: function sendPromoCode(sendPromoCodeRequest) {
        let url = `sendPromoCode`;
        return ApiGateway.put(url, sendPromoCodeRequest);
    },

    applyPromoCode: function sendPromoCode(applyPromoCodeRequest) {
        let url = `applyPromoCode`;
        return ApiGateway.put(url, applyPromoCodeRequest);
    }
} 

export default PromoCodeApi;