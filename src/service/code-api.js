import ApiGateway from './api-gateway';

const CodeApi = {

    loadCodesByCodeName: function loadCodesByCodeName(codeName) {
        let url = `enc-code?code=${codeName}`;
        return ApiGateway.get(url);
    }
} 

export default CodeApi;