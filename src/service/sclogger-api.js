import ApiGateway from './api-gateway';
const LoggerApi = {

    recordError: async function recordError(logLevel, message, error) {
        console.log(error);

        /*let url = `log/mobile`;
        const device = this.getDeviceDetails();
        const user = await ApiGateway.getUser();
        let customer = '';
        if (user) {
            customer = user?.customerWrapper?.userName
        }

        const req = {
            "customer": customer,
            "device": device,
            "logLevel": logLevel,
            "message": message,
            "error": JSON.stringify(error)
        }
        return ApiGateway.post(url, req);
        */
    },

    getDeviceDetails: function getDeviceDetails() {
        try {
/*             const applicationName = DeviceInfo.getApplicationName();
            const brand = DeviceInfo.getBrand();
            const buildNumber  = DeviceInfo.getBuildNumber();
            const model = DeviceInfo.getModel();
            const isTablet = DeviceInfo.isTablet(); */

            const applicationName = '';
            const brand = '';
            const buildNumber  = '';
            const model = '';
            const isTablet = '';

            const device = {
                "applicationName": applicationName,
                "brand": brand,
                "buildNumber": buildNumber,
                "model": model,
                "isTablet": isTablet
            }
            return device;

        } catch(err) {}
        return {};
    },

}

export default LoggerApi;