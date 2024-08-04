import { takeLatest, put, call } from 'redux-saga/effects';
import * as actions from '../actions/product-action';
import { READY_MADE, CATEGORIES, FILTERED_READY_MADE, GET_NEW_PRODUCTS,
  ADDTORECENTVIEW, GET_RECENT_VIEWED_PRODUCTS, GET_PRODUCT_DETAIL,
  SEARCH_PRODUCTS_BY_CATEGORY, SEARCH_PRODUCTS } from '../actions/product-action';
import  ProductApi from '../service/product-api';
import LoggerApi from '../service/sclogger-api';
import * as constants from '../util/constants';

/******************************* WATCHERS *************************************/

function* getProductsByCategoryIds(action) {
  try {
    const response = yield call(ProductApi.getProductsByCategoryIds, action.categoryId);
    if (response.data.length > 0) {
        yield put(actions.getReadyMadeDesignsSuccess(response.data));
    } else {
        yield put(actions.getReadyMadeDesignsFailure('Thers is no Products Found!'));
    }
  } catch (error) {
    let resError = 'Something happened on server, pleasetry again later!';
    yield put(actions.getReadyMadeDesignsFailure(resError));
    LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in get products by Category Ids`, error);
  }
}


function* getProductsByCategoryId(action) {
  try {
    const response = yield call(ProductApi.getProductsByCategoryId, action.categoryId);
    if (response.data.length > 0) {
        yield put(actions.getFilteredReadyMadeDesignsSuccess(response.data));
    } else {
        yield put(actions.getFilteredReadyMadeDesignsFailure('Thers is no Products found'));
    }
  } catch (error) {
    let resError = 'Something happened on server, pleasetry again later!';
    yield put(actions.getFilteredReadyMadeDesignsFailure(resError));
    LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in get products by Category Id`, error);
  }
}

function* getCategories(action) {
    try {
      const response = yield call(ProductApi.getCategories);

      if (response.data.length > 0) {
        yield put(actions.getCategoriesSuccess(response.data));
      } else {
        yield put(actions.getCategoriesFailure('Thers is no categories found'));
      }

    } catch (error) {
      let resError = 'Something happened on server, pleasetry again later!';
      yield put(actions.getCategoriesFailure(resError));
      LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in get Categories`, error);
    }
}

function* getNewProducts(action) {
    try {
        yield put(actions.getNewProductsRequest());
        const response = yield call(ProductApi.getNewProducts, action.categoryIds);

        if (response.data.length > 0) {
            yield put(actions.getNewProductsSuccess(response.data));
        } else {
            yield put(actions.getNewProductsFailure('There are no new Products Found!'));
        }
    } catch (error) {
        let resError = 'Something happened on server, pleasetry again later!';
        yield put(actions.getNewProductsFailure(resError));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in get new products by Category Ids`, error);
    }
}

function* addToRecentView(action) {
    try {
        yield put(actions.addToRecentViewRequest());
        yield call(ProductApi.addToRecentView, action.recentProduct);
        yield put(actions.addToRecentViewSuccess());
    } catch (error) {
        let resError = 'Something happened on server, pleasetry again later!';
        yield put(actions.addToRecentViewFailure(resError));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error when save the recently viewed product`, error);
    }
}

function* getRecentViewedProducts(action) {
  try {
      yield put(actions.getRecentViewedProductsRequest());
      const response = yield call(ProductApi.getRecentViewedProducts, action.customerId);

      if (response.data.length > 0) {
          yield put(actions.getRecentViewedProductsSuccess(response.data));
      } else {
          yield put(actions.getRecentViewedProductsFailure('There are no new recently viewed products found!'));
      }
  } catch (error) {
      let resError = 'Something happened on server, pleasetry again later!';
      yield put(actions.getRecentViewedProductsFailure(resError));
      LoggerApi.recordError(constants.LOG_LEVEL.error, `Error during get recently viewed products`, error);
  }
}

function* getProductDetail(action) {
  try {
      yield put(actions.getProductDetailRequest());
      const response = yield call(ProductApi.getProductDetail, action.productId);
      yield put(actions.getProductDetailSuccess(response.data));
  } catch (error) {
      let resError = 'Sorry, there was an error loading the product detail. Please try again!';
      yield put(actions.getProductDetailFailure(resError));
      LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in loading the product detail`, error);
  }
}

function* searchProductsByCategory(action) {
  try {
    yield put(actions.searchProductsByCategoryRequest());
    const response = yield call(ProductApi.searchProductsByCategory, 
        action.categoryId, action.pageSize, action.page, action.query, action.sort, 
        action.sortDirection, action.filters);
    yield put(actions.searchProductsByCategorySuccess(response.data));
  } catch (error) {
    let errorMsg = 'Something happened on server, please try again later!';
    yield put(actions.searchProductsByCategoryFailure(errorMsg));
    LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in search products by Category Id`, error);
  }
}

function* searchProducts(action) {
  try {
    yield put(actions.searchProductsRequest());
    const response = yield call(ProductApi.searchProducts, 
        action.pageSize, action.page, action.query, action.sort, 
        action.sortDirection, action.filters);
    yield put(actions.searchProductsSuccess(response.data));
  } catch (error) {
    let errorMsg = 'Something happened on server, please try again later!';
    yield put(actions.searchProductsFailure(errorMsg));
    LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in search products`, error);
  }
}
  
// Manage Product and Categories watch
export function* productWatcher() {
    yield takeLatest(CATEGORIES, getCategories);
    yield takeLatest(FILTERED_READY_MADE, getProductsByCategoryId);
    yield takeLatest(READY_MADE, getProductsByCategoryIds);
    yield takeLatest(GET_NEW_PRODUCTS, getNewProducts);
    yield takeLatest(ADDTORECENTVIEW, addToRecentView);
    yield takeLatest(GET_RECENT_VIEWED_PRODUCTS, getRecentViewedProducts);
    yield takeLatest(GET_PRODUCT_DETAIL, getProductDetail);
    yield takeLatest(SEARCH_PRODUCTS_BY_CATEGORY, searchProductsByCategory);
    yield takeLatest(SEARCH_PRODUCTS, searchProducts);
}