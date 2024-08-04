import ApiGateway from './api-gateway';

const VersionApi = {

    validateVersion : function validateVersion(osType, currentVersion) {
        let url = `encappversion/validateAppVersion?osType=${osType}&currentVersion=${currentVersion}`;
        return ApiGateway.get(url);
    }
} 

export default VersionApi;