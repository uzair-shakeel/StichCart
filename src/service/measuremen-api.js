import ApiGateway from './api-gateway';

const MeasurementApi = {

    loadCustomerMeasurements: function loadCustomerMeasurements(customerId) {
        let url = `enclothe-measurement/measurements?customerId=${customerId}`;
        return ApiGateway.get(url);
    },

    saveCustomerMeasurements: function saveCustomerMeasurements(customerId, measurement) {
        let url = `enclothe-measurement/measurement?customerid=${customerId}`;
        return ApiGateway.post(url, measurement);
    },

    deleteCustomerMeasurements: function deleteCustomerMeasurements(customerId, measurementId) {
        let url = `enclothe-measurement/measurement?customerId=${customerId}&measurementId=${measurementId}`;
        return ApiGateway.remove(url, {});
    },

    updateCustomerMeasurements: function updateCustomerMeasurements(customerId, measurement) {
        let url = `enclothe-measurement/measurement?customerid=${customerId}`;
        return ApiGateway.post(url, measurement);
    },
}

export default MeasurementApi;