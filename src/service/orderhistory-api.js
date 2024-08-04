import ApiGateway from './api-gateway';

const OrderHistoryApi = {

    getOrdersSummary: function getOrdersSummary(customerId) {
        let url = `encOrders?customerId=${customerId}`;
        return ApiGateway.get(url);
    },
    getInProgressOrderWithStatusHistory: function getInProgressOrderWithStatusHistory(customerId, noOfOrders) {
        let url = `encOrders/inprogress?customerId=${customerId}&noOfOrders=${noOfOrders}&includeOrderItemStatusSummary=true&includeOrderItemStatusHistory=true&includeOrderStatusHistory=false`;
        return ApiGateway.get(url);
    },
    getRecentOrderItems: function getRecentOrderItems(customerId, noOfOrderItems) {
        let url = `encOrders/items/recent?customerId=${customerId}&noOfItems=${noOfOrderItems}&includeOrderItemStatusSummary=true&includeOrderItemStatusHistory=true`;
        return ApiGateway.get(url);
    },
    getSubmittedOrderItems: function getSubmittedOrderItems(customerId) {
        let url = `encOrders/items?customerId=${customerId}`;
        return ApiGateway.get(url);
    }
} 

export default OrderHistoryApi;