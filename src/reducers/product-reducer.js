import {
    CATEGORIES, CATEGORIES_SUCCESS, CATEGORIES_FAILURE,
    READY_MADE, READY_MADE_SUCCESS, READY_MADE_FAILURE,
    FILTERED_READY_MADE, FILTERED_READY_MADE_SUCCESS, FILTERED_READY_MADE_FAILURE, UPDATE_CART_COUNT,
    GET_NEW_PRODUCTS_REQUEST, GET_NEW_PRODUCTS_SUCCESS, GET_NEW_PRODUCTS_FAILURE,
    ADDTORECENTVIEW_REQUEST, ADDTORECENTVIEW_SUCCESS, ADDTORECENTVIEW_FAILURE,
    GET_RECENT_VIEWED_PRODUCTS_REQUEST, GET_RECENT_VIEWED_PRODUCTS_SUCCESS, GET_RECENT_VIEWED_PRODUCTS_FAILURE,
    GET_PRODUCT_DETAIL_REQUEST, GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_DETAIL_FAILURE,
    SEARCH_PRODUCTS_BY_CATEGORY_REQUEST, SEARCH_PRODUCTS_BY_CATEGORY_SUCCESS, SEARCH_PRODUCTS_BY_CATEGORY_FAILURE,
    SEARCH_PRODUCTS_REQUEST, SEARCH_PRODUCTS_SUCCESS, SEARCH_PRODUCTS_FAILURE
} from '../actions/product-action'

function readyMadeReducers(prevState = { isLoading: false,
                                            searchProductsByCategoryLoading: false,
                                            searchProductsLoading: false, 
                                            isNewProductLoading: false,
                                            addToRecentViewLoading: false,
                                            isRecentViewedProductsLoading: false,
                                            productDetailLoading: false }, action) {
    switch (action.type) {
        case READY_MADE:
            return { ...prevState, isLoading: true };
        case READY_MADE_SUCCESS:
            return { ...prevState, isLoading: false, products: action.products, prodError: null };
        case READY_MADE_FAILURE:
            return { ...prevState, isLoading: false, products: null, prodError: action.error };
        case FILTERED_READY_MADE:
            return { ...prevState, isLoading: true };
        case FILTERED_READY_MADE_SUCCESS:
            return { ...prevState, isLoading: false, products: action.products, prodError: null };
        case FILTERED_READY_MADE_FAILURE:
            return { ...prevState, isLoading: false, products: null, prodError: action.error };
        case CATEGORIES:
            return { ...prevState, isLoading: true };
        case CATEGORIES_SUCCESS:
            return { ...prevState, isLoading: false, categories: action.categories, catError: null };
        case CATEGORIES_FAILURE:
            return { ...prevState, isLoading: false, categories: null, catError: action.error };
        case UPDATE_CART_COUNT:
            return { ...prevState, cartBadgeCount: action.count };
        case GET_NEW_PRODUCTS_REQUEST:
            return { ...prevState, isNewProductLoading: true, newProducts:[] };
        case GET_NEW_PRODUCTS_SUCCESS:
            return { ...prevState, isNewProductLoading: false, newProducts: action.newProducts, errorMessage: null };
        case GET_NEW_PRODUCTS_FAILURE:
            return { ...prevState, isNewProductLoading: false,  errorMessage: action.error };
        case ADDTORECENTVIEW_REQUEST:
            return { ...prevState, addToRecentViewLoading: true };
        case ADDTORECENTVIEW_SUCCESS:
            return { ...prevState, addToRecentViewLoading: false, errorMessage: null };
        case ADDTORECENTVIEW_FAILURE:
            return { ...prevState, addToRecentViewLoading: false,  errorMessage: action.error };
        case GET_RECENT_VIEWED_PRODUCTS_REQUEST:
            return { ...prevState, isRecentViewedProductLoading: true };
        case GET_RECENT_VIEWED_PRODUCTS_SUCCESS:
            return { ...prevState, isRecentViewedProductLoading: false, recentViewedProducts: action.recentViewedProducts, errorMessage: null };
        case GET_RECENT_VIEWED_PRODUCTS_FAILURE:
            return { ...prevState, isRecentViewedProductLoading: false,  errorMessage: action.error };
        case GET_PRODUCT_DETAIL_REQUEST:
            return { ...prevState, productDetail: {}, productDetailLoading: true };
        case GET_PRODUCT_DETAIL_SUCCESS:
            return { ...prevState, productDetailLoading: false, productDetail: action.productDetail, errorMessage: null };
        case GET_PRODUCT_DETAIL_FAILURE:
            return { ...prevState, productDetailLoading: false, productDetail: {}, errorMessage: action.error };
        case SEARCH_PRODUCTS_BY_CATEGORY_REQUEST:
            return { ...prevState, searchResult: {}, searchProductsByCategoryLoading: true };
        case SEARCH_PRODUCTS_BY_CATEGORY_SUCCESS:
            return { ...prevState, searchProductsByCategoryLoading: false, searchResult: action.searchResult, errorMessage: null };
        case SEARCH_PRODUCTS_BY_CATEGORY_FAILURE:
            return { ...prevState, searchProductsByCategoryLoading: false, searchResult: {}, errorMessage: action.error };
        case SEARCH_PRODUCTS_REQUEST:
            return { ...prevState, searchResult: {}, searchProductsLoading: true };
        case SEARCH_PRODUCTS_SUCCESS:
            return { ...prevState, searchProductsLoading: false, searchResult: action.searchResult, errorMessage: null };
        case SEARCH_PRODUCTS_FAILURE:
            return { ...prevState, searchProductsLoading: false, searchResult: {}, errorMessage: action.error };
        default:
            return prevState;
    }
}

export default readyMadeReducers;