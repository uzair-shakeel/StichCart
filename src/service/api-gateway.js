import axios from 'axios';
import ReduxStore from '../store/configure-store';
import { USER_DATA, USER_IDENTIFIER } from '../util/constants';
import Config from '../config/appconfig';
import logger from '../util/logger';

const ApiGatewayConfig = {
    api: {
      methodGet : "get",
      methodPost : "post",
      methodPut : "put",	
      methodDelete : "delete",
    }
};

const ApiGateway = {

    authToken : '',

    request: async function (config) {

        let CancelToken = axios.CancelToken;
        let source = CancelToken.source();
        let gateway = this;

        let _res= null;

        setTimeout(function(){ 
            if (_res == null ){
                source.cancel('Operation canceled by the user.');
            }
        }, 60000);

        config.cancelToken = source.token;
        return axios(
            config
        ).then(function (response) {
            return response;
        }).catch(error => {
            logger.recordError(error, `Probelm when call the api url= ${JSON.stringify(config)}`, true);
            throw error;
        })
    },


    get: async function (url) {
        var header = await this.prepareHeader();
        var config = {
                url: url,
                method: ApiGatewayConfig.api.methodGet,
                baseURL: Config.api.baseURL,
                headers: header
            };

        return this.request(config);
    },

    post: async function (url, data) {
        var header = {};
        if (url != 'authenticateRegister' && !url.startsWith("enclothe-reseller/registerPartner") && !url.startsWith("enclothe-reseller/authenticate") ){
            header = await this.prepareHeader();
        }    
        var config = {
            url: url,
            method: ApiGatewayConfig.api.methodPost,
            baseURL: Config.api.baseURL,
            data: data,
            headers: header
            
        };
        return this.request(config);
        
    },

    put: async function (url, data) {
        var header = await this.prepareHeader();

        var config = {
            url: url,
            method: ApiGatewayConfig.api.methodPut,
            baseURL: Config.api.baseURL,
            data: data,
            headers: header
        };

        return this.request(config);
        
    },

    remove: async function (url, data) {
        var header = await this.prepareHeader();

        var config = {
            url: url,
            method: ApiGatewayConfig.api.methodDelete,
            baseURL: Config.api.baseURL,
            data: data,
            headers: header
        };
        return axios(config);
        
    },

    upload: async function (url, data) {
        var header = {};
        if (url != 'authenticateRegister' && !url.startsWith("enclothe-reseller/registerPartner") && !url.startsWith("enclothe-reseller/authenticate") ){
            header = await this.prepareHeader('multipart/form-data');
        }    
        var config = {
            url: url,
            method: ApiGatewayConfig.api.methodPost,
            baseURL: Config.api.baseURL,
            data: data,
            headers: header
            
        };
        return this.request(config);
        
    },


    prepareHeader: async function(contentType = "application/json") {
        let token = '';
        if (token != null) {
            var header = {
                "Authorization": "Bearer "+token,
                "Content-Type": contentType
            };
            return header;
        } else {
            return {};
        }
    }, 
    
}

export default ApiGateway;
    