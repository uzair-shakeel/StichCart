import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/category-action';
import  CategoryApi from '../service/category-api';
import LoggerApi from '../service/sclogger-api';
import * as constants from '../util/constants';

const { getCategories, loadCustomDesignCategories, loadCategoryDetail } = actions;

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* loadCetegories(action) {
    try {
        yield put(getCategories.request()); 
        const response = yield call(CategoryApi.getCategories);
        yield put(getCategories.success(response.data));
    }catch (err) {
        yield put(getCategories.failure(action.customer,'Sorry, there was an error loading the product category. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in load Cetegories`, err);
    }
}

export function* fetchCustomDesignCetegories(action) {
    try {
        yield put(loadCustomDesignCategories.request()); 
        const response = yield call(CategoryApi.getCustomDesignCategories);
        let customCategoryNames = [];
        if(response.data && response.data.length > 0) {
            response.data.forEach(function (item) {
                customCategoryNames.push({value: item.name, label:item.name});
            });
        }
        yield put(loadCustomDesignCategories.success(response.data, customCategoryNames));
    }catch (err) {
        yield put(loadCustomDesignCategories.failure(action.customer,'Sorry, there was an error loading the custom design Cetegories. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in load custom design Cetegories`, err);
    }
}

export function* fetchCetegoryDetail(action) {
    try {
        yield put(loadCategoryDetail.request()); 
        const response = yield call(CategoryApi.getCategoryDetail, action.categoryId);
        yield put(loadCategoryDetail.success(response.data));
    }catch (err) {
        yield put(loadCategoryDetail.failure(action.customer,'Sorry, there was an error loading the product category detail. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in load Cetegory detail`, err);
    }
}

// Manage the category watch
export function* categoryWatcher() {
    yield takeEvery(actions.LOAD_CATEGORIES, loadCetegories)
    yield takeEvery(actions.LOAD_CUSTOM_DESIGN_CATEGORIES, fetchCustomDesignCetegories)
    yield takeEvery(actions.LOAD_CATEGORY_DETAIL, fetchCetegoryDetail)
}