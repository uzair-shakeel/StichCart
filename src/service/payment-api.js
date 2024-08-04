import ApiGateway from './api-gateway';

const PaymentApi = {

    addPaymentDetailsAndDeliveryTime: function addPaymentDetailsAndDeliveryTime(orderNo, paymentReference, pickupDateTime, additionalInfo) {
        let url = `encOrders/addPaymentPickupToOrder?OrderNo=${orderNo}&paymentReference=${paymentReference}&pickupDateTime=${pickupDateTime}&additionalInfo=${additionalInfo}`;
        return ApiGateway.put(url);
    }
} 

export default PaymentApi;