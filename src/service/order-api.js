import ApiGateway from './api-gateway';

const OrderApi = {
    updateMeasurementOfOrder: function updateMeasurementOfOrder(orderId, measurementId) {
        let url = `encOrders/${orderId}/measurement?measurementId=${measurementId}`;
        return ApiGateway.put(url);
    },

    loadOrderDetails: function loadOrderDetails(orderId) {
        let url = `encOrders/${orderId}?includeOrderItemStatusSummary=true&includeOrderItemStatusHistory=true`;
        return ApiGateway.get(url);
    },

    updateMeasurementToOrder: function updateMeasurementToOrder(cartId, customerId, measurementId, isIncludeExpDeliveryDate, measurementPref) {
        let url = `encOrders/${cartId}/measurement?customerId=${customerId}&measurementId=${measurementId}&includedExpectedDeliveryDate=${isIncludeExpDeliveryDate}&measurementPref=${measurementPref}`;
        return ApiGateway.post(url);
    },

    updateMeasureAtHomeToOrder: function updateMeasureAtHomeToOrder(cartId, customerId, isIncludeExpDeliveryDate, measurementPref, bodyData) {
        let url = `encOrders/${cartId}/measurement?customerId=${customerId}&measurementPref=${measurementPref}`;
        return ApiGateway.put(url, bodyData);
    },

    updateAddressToOrder: function updateAddressToOrder(cartId, customerId, pickupAddrId, deliveryAddrId, isIncludeExpDeliveryDate) {
        let url = `encOrders/${cartId}/address?customerId=${customerId}&pickupAddressId=${pickupAddrId}&deliveryAddressId=${deliveryAddrId}&includedExpectedDeliveryDate=${isIncludeExpDeliveryDate}`;
        return ApiGateway.post(url);
    },

    checkout: function checkout(cartId) {
        let url = `encCart/checkout?cartId=${cartId}`;
        return ApiGateway.post(url);
    },

    cancelOrder: function cancelOrder(customerId, orderId, cancelReason) {
        let url = `encOrders/${orderId}/cancel?customerId=${customerId}`;
        const cancelReq = {
            "orderId": orderId,
            "reason": cancelReason
        }
        return ApiGateway.put(url, cancelReq);
    },

    cancelOrderItem: function cancelOrder(customerId, orderId, orderItemId, cancelReason) {
        let url = `encOrders/${orderId}/${orderItemId}/cancel?customerId=${customerId}`;
        const cancelReq = {
            "reason": cancelReason
        }
        return ApiGateway.put(url, cancelReq);
    },

} 

export default OrderApi;