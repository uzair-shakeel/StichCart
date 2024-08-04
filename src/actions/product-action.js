export const CATEGORIES = 'CATEGORIES'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_FAILURE = 'CATEGORIES_FAILURE'

export const READY_MADE = 'READY_MADE'
export const READY_MADE_SUCCESS = 'READY_MADE_SUCCESS'
export const READY_MADE_FAILURE = 'READY_MADE_FAILURE'

export const FILTERED_READY_MADE = 'FILTERED_READY_MADE'
export const FILTERED_READY_MADE_SUCCESS = 'FILTERED_READY_MADE_SUCCESS'
export const FILTERED_READY_MADE_FAILURE = 'FILTERED_READY_MADE_FAILURE'

export const ADDTOCART = 'ADDTOCART'
export const ADDTOCART_SUCCESS = 'ADDTOCART_SUCCESS'
export const ADDTOCART_FAILURE = 'ADDTOCART_FAILURE'

export const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT'

export const GET_NEW_PRODUCTS = 'GET_NEW_PRODUCTS'
export const GET_NEW_PRODUCTS_REQUEST = 'GET_NEW_PRODUCTS_REQUEST'
export const GET_NEW_PRODUCTS_SUCCESS = 'GET_NEW_PRODUCTS_SUCCESS'
export const GET_NEW_PRODUCTS_FAILURE = 'GET_NEW_PRODUCTS_FAILURE'

export const ADDTORECENTVIEW = 'ADDTORECENTVIEW'
export const ADDTORECENTVIEW_REQUEST = 'ADDTORECENTVIEW_REQUEST'
export const ADDTORECENTVIEW_SUCCESS = 'ADDTORECENTVIEW_SUCCESS'
export const ADDTORECENTVIEW_FAILURE = 'ADDTORECENTVIEW_FAILURE'

export const GET_RECENT_VIEWED_PRODUCTS = 'GET_RECENT_VIEWED_PRODUCTS'
export const GET_RECENT_VIEWED_PRODUCTS_REQUEST = 'GET_RECENT_VIEWED_PRODUCTS_REQUEST'
export const GET_RECENT_VIEWED_PRODUCTS_SUCCESS = 'GET_RECENT_VIEWED_PRODUCTS_SUCCESS'
export const GET_RECENT_VIEWED_PRODUCTS_FAILURE = 'GET_RECENT_VIEWED_PRODUCTS_FAILURE'

export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL'
export const GET_PRODUCT_DETAIL_REQUEST = 'GET_PRODUCT_DETAIL_REQUEST'
export const GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS'
export const GET_PRODUCT_DETAIL_FAILURE = 'GET_PRODUCT_DETAIL_FAILURE'

export const SEARCH_PRODUCTS_BY_CATEGORY = 'SEARCH_PRODUCTS_BY_CATEGORY'
export const SEARCH_PRODUCTS_BY_CATEGORY_REQUEST = 'SEARCH_PRODUCTS_BY_CATEGORY_REQUEST'
export const SEARCH_PRODUCTS_BY_CATEGORY_SUCCESS = 'SEARCH_PRODUCTS_BY_CATEGORY_SUCCESS'
export const SEARCH_PRODUCTS_BY_CATEGORY_FAILURE = 'SEARCH_PRODUCTS_BY_CATEGORY_FAILURE'

export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export const SEARCH_PRODUCTS_REQUEST = 'SEARCH_PRODUCTS_REQUEST'
export const SEARCH_PRODUCTS_SUCCESS = 'SEARCH_PRODUCTS_SUCCESS'
export const SEARCH_PRODUCTS_FAILURE = 'SEARCH_PRODUCTS_FAILURE'

//ready made designs
export function getReadyMadeDesigns(appId, categoryId, q, page) {
    return {
        type: READY_MADE,
        appId,
        categoryId,
        q,
        page
    };
}

export function getReadyMadeDesignsSuccess(products) {
    return {
        type: READY_MADE_SUCCESS,
        products
    };
}

export function getReadyMadeDesignsFailure(error) {
    return {
        type: READY_MADE_FAILURE,
        error
    };
}

//filtered ready made designs
export function getFilteredReadyMadeDesigns(categoryId) {
    return {
        type: FILTERED_READY_MADE,
        categoryId
    };
}

export function getFilteredReadyMadeDesignsSuccess(products) {
    return {
        type: FILTERED_READY_MADE_SUCCESS,
        products
    };
}

export function getFilteredReadyMadeDesignsFailure(error) {
    return {
        type: FILTERED_READY_MADE_FAILURE,
        error
    };
}

//categories
export function getCategories(appId) {
    return {
        type: CATEGORIES,
        appId
    };
}

export function getCategoriesSuccess(categories) {
    return {
        type: CATEGORIES_SUCCESS,
        categories
    };
}

export function getCategoriesFailure(error) {
    return {
        type: CATEGORIES_FAILURE,
        error
    };
}

export function updateCartBadgeCount(count) {
    return {
        type: UPDATE_CART_COUNT,
        count
    };
}

//New Products
export function getNewProducts(categoryIds) {
    return {
        type: GET_NEW_PRODUCTS,
        categoryIds
    };
}

export function getNewProductsRequest() {
    return {
        type: GET_NEW_PRODUCTS_REQUEST
    };
}

export function getNewProductsSuccess(newProducts) {
    return {
        type: GET_NEW_PRODUCTS_SUCCESS,
        newProducts
    };
}

export function getNewProductsFailure(error) {
    return {
        type: GET_NEW_PRODUCTS_FAILURE,
        error
    };
}

//Add the product to recent view
export function addToRecentView(recentProduct) {
    return {
        type: ADDTORECENTVIEW,
        recentProduct
    };
}

export function addToRecentViewRequest() {
    return {
        type: ADDTORECENTVIEW_REQUEST
    };
}

export function addToRecentViewSuccess() {
    return {
        type: ADDTORECENTVIEW_SUCCESS
    };
}

export function addToRecentViewFailure(error) {
    return {
        type: ADDTORECENTVIEW_FAILURE,
        error
    };
}

//Recently Viewed Products
export function getRecentViewedProducts(customerId) {
    return {
        type: GET_RECENT_VIEWED_PRODUCTS,
        customerId
    };
}

export function getRecentViewedProductsRequest() {
    return {
        type: GET_RECENT_VIEWED_PRODUCTS_REQUEST
    };
}

export function getRecentViewedProductsSuccess(recentViewedProducts) {
    return {
        type: GET_RECENT_VIEWED_PRODUCTS_SUCCESS,
        recentViewedProducts
    };
}

export function getRecentViewedProductsFailure(error) {
    return {
        type: GET_RECENT_VIEWED_PRODUCTS_FAILURE,
        error
    };
}

//Product Detail
export function getProductDetail(productId) {
    return {
        type: GET_PRODUCT_DETAIL,
        productId
    };
}

export function getProductDetailRequest() {
    return {
        type: GET_PRODUCT_DETAIL_REQUEST
    };
}

export function getProductDetailSuccess(productDetail) {
    return {
        type: GET_PRODUCT_DETAIL_SUCCESS,
        productDetail
    };
}

export function getProductDetailFailure(error) {
    return {
        type: GET_PRODUCT_DETAIL_FAILURE,
        error
    };
}

//Search products from category
export function searchProductsByCategory(
    categoryId, 
    pageSize, 
    page, 
    query, 
    sort, 
    sortDirection,
    filters) {
    return {
        type: SEARCH_PRODUCTS_BY_CATEGORY,
        categoryId,
        pageSize,
        page,
        query,
        sort, 
        sortDirection,
        filters
    };
}

export function searchProductsByCategoryRequest() {
    return {
        type: SEARCH_PRODUCTS_BY_CATEGORY_REQUEST
    };
}

export function searchProductsByCategorySuccess(searchResult) {
    return {
        type: SEARCH_PRODUCTS_BY_CATEGORY_SUCCESS,
        searchResult
    };
}

export function searchProductsByCategoryFailure(error) {
    return {
        type: SEARCH_PRODUCTS_BY_CATEGORY_FAILURE,
        error
    };
}

//Search Products
export function searchProducts(pageSize, page, query, sort, sortDirection, filters) {
    return {
        type: SEARCH_PRODUCTS,
        pageSize,
        page,
        query,
        sort, 
        sortDirection,
        filters
    };
}

export function searchProductsRequest() {
    return {
        type: SEARCH_PRODUCTS_REQUEST
    };
}

export function searchProductsSuccess(searchResult) {
    return {
        type: SEARCH_PRODUCTS_SUCCESS,
        searchResult
    };
}

export function searchProductsFailure(error) {
    return {
        type: SEARCH_PRODUCTS_FAILURE,
        error
    };
}
