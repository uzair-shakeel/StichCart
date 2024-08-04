import ApiGateway from './api-gateway';
import MockDataLoader from './mock-data-loader';
import Config from '../config/appconfig';

const DataLoader = {

    get: function (url, mockFile) {
        if(Config.useMockData) {
            return MockDataLoader.loadData(mockFile)
        } else {
            return ApiGateway.get(url);
        }
    },

    post:  function (url, data, mockFile) {
        if(Config.useMockData) {
            return MockDataLoader.loadData(mockFile)
        } else {
            return ApiGateway.post(url, data);
        }
    },

    put:  function (url, data, mockFile) {
        if(Config.useMockData) {
            return MockDataLoader.loadData(mockFile)
        } else {
            return ApiGateway.put(url, data);
        }
    },

    remove:  function (url, data, mockFile) {
        if(Config.useMockData) {
            return MockDataLoader.loadData(mockFile)
        } else {
            return ApiGateway.remove(url, data);
        }
    },

    upload:  function (url, data, mockFile) {
        if(Config.useMockData) {
            return MockDataLoader.loadData(mockFile)
        } else {
            return ApiGateway.upload(url);
        }
    }
} 

export default DataLoader;