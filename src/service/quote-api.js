import ApiGateway from './api-gateway';

const QuoteApi = {

    fetchCustomerQuotes: function fetchCustomerQuotes(customerId) {
        let url = `quote?customerId=${customerId}`;
        return ApiGateway.get(url);
    },
    fetchQuoteDetail: function fetchQuoteDetail(customerQuoteId, customerId) {
        let url = `quote/${customerQuoteId}/detail?customerId=${customerId}&includeAssets=true&includeAddons=true`;
        return ApiGateway.get(url);
    },
    createQuote: function createQuote(customerId, quoteRequest) {
        let url = `quote?customerid=${customerId}`;
        return ApiGateway.post(url, quoteRequest);
    },
    uploadDesignType: function uploadDesignType(formData) {
        let url = `quote/upload`;
        return ApiGateway.upload(url, formData);
    },
    declineQuote: function declineQuote(customerId, customerQuoteId, declineReason) {
        let url = `quote/${customerQuoteId}/cancel?customerId=${customerId}`;
        const declineReq = {
            "quote": {
				"quoteCancelReason": declineReason
			}
        };
        return ApiGateway.put(url, declineReq);
    },
    fetchRecentQuotes:  function fetchRecentQuotes(customerId) {
        let url = `quote/recentQuotesByCustomerId/${customerId}`;
        return ApiGateway.get(url);
    },
    fetchQuoteDetailByQuoteId: function fetchQuoteDetail(quoteId, customerId) {
        let url = `quote/readCustomerQuoteByQuoteId/${quoteId}?customerId=${customerId}&includeAssets=true&includeAddons=true`;
        return ApiGateway.get(url);
    }
} 

export default QuoteApi;