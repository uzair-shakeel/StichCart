import ApiGateway from './api-gateway';
import DataLoader from './data-loader';

const MOCK_FILE_NAME = 'new-products.json';

const ProductApi = {

    getCategories: function getCategories() {
        let url = `encproducts/getallcategories?externalId=Enclothe`;
        return ApiGateway.get(url);
    },

    getProductsByCategoryIds: function getProductsByCategoryIds(categoryIds) {
        let url = `encproducts/getProductsByCategoryExternalId?externalId=Enclothe&categoryids=${categoryIds}`;
        return ApiGateway.get(url);
    },

    getProductsByCategoryId: function getProductsByCategoryIds(categoryId) {
        let url = `encproducts/bycategory?categoryId=${categoryId}`;
        return ApiGateway.get(url);
    },

    getNewProducts: function getNewProducts(categoryIds) {
        let url = `encproducts/new?externalId=Enclothe&categoryids=${categoryIds}`;
        return DataLoader.get(url, MOCK_FILE_NAME);
    },
    
    addToRecentView: function addToRecentView(product) {
        let url = `enc-recentview/item`;
        return ApiGateway.post(url, product);
    },

    getRecentViewedProducts: function getRecentViewedProducts(customerId) {
        let url = `enc-recentview/items?customerId=${customerId}`;
        return ApiGateway.get(url);
    },

    getProductDetail: function getProductDetail(productId) {
        let url = `encproducts/product/${productId}`;
        return ApiGateway.get(url);
    },

    searchProductsByCategory : function searchProductsByCategory(
        categoryId, 
        pageSize, 
        page, 
        query,
        sort, 
        sortDirection,
        filters) {
        let url = `catalog/search/category/${categoryId}?pageSize=${pageSize}&page=${page}&q=${query}&sort=${sort} ${sortDirection}`;
        
        if(filters && filters.length>0) {
            filters.map(filter=> {
                url = `${url}&${filter.fieldName}=${filter.valueKey}`
            })
        }
        return ApiGateway.get(url);
    },

    searchProducts : function searchProducts(
        pageSize, 
        page, 
        query,
        sort, 
        sortDirection,
        filters) {
        let url = `catalog/search?pageSize=${pageSize}&page=${page}&q=${query}&sort=${sort} ${sortDirection}`;
        if(filters && filters.length>0) {
            filters.map(filter=> {
                url = `${url}&${filter.fieldName}=${filter.valueKey}`
            })
        }
        return ApiGateway.get(url);
    }

} 

export default ProductApi;