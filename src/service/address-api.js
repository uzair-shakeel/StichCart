import ApiGateway from './api-gateway';

const AddressApi = {

    getAllCustomerAddresses: function getAllCustomerAddresses(customerId) {
        let url = `enc-customer/addresses?customerId=${customerId}`;
        return ApiGateway.get(url);
    },

    addCustomerAddress: function addCustomerAddress(customerId, address) {
        let url = `enc-customer/address?customerId=${customerId}`;
        return ApiGateway.post(url, address);
    },

    deleteCustomerAddress: function deleteCustomerAddress(customerId, addressId) {
        let url = `enc-customer/address/${addressId}?customerId=${customerId}`;
        return ApiGateway.remove(url, {});
    }
} 

export default AddressApi;