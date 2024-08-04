import ApiGateway from './api-gateway';

const CatalogApi = {

    getProductMedia: function getProductMedia(productId) {
        let url = `catalog/product/${productId}/media`;
        return ApiGateway.get(url);
    }
} 

export default CatalogApi;