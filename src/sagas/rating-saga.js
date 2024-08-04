import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/rating-action';
import  RatingApi from '../service/rating-api';
import LoggerApi from '../service/sclogger-api';
import * as constants from '../util/constants';
const { recentReviews, addProductRatingAndReview, ratingAndReviewOfItem } = actions;

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* loadRecentReviews(action) {
    try {
        yield put(recentReviews.request()); 
        const response = yield call(RatingApi.getRecentRating, action.maxResults);
        yield put(recentReviews.success(response.data));
    }catch (err) {
        yield put(recentReviews.failure('Sorry, there was an error loading Reviews. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in load recent review`, err);
    }
}

export function* loadRatingAndReviewByItem(action) {
    try {
        yield put(ratingAndReviewOfItem.request()); 
        const response = yield call(RatingApi.getRatingAndReviewByItem, action.itemId);
        yield put(ratingAndReviewOfItem.success(response.data));
    }catch (err) {
        yield put(ratingAndReviewOfItem.failure('Sorry, there was an error loading Rating and Review. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in load rating and review by item Id`, err);
    }
}

export function* saveProductRatingAndReview(action) {
    try {
        yield put(addProductRatingAndReview.request(action.customer)); 
        const response = yield call(RatingApi.saveProductRatingAndReview, action.customerId, action.productId, action.reviewText, action.rating);
        yield put(addProductRatingAndReview.success(response.data));
    }catch (err) {
        yield put(addProductRatingAndReview.failure(action.customer,'Sorry, there was an error submit review. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in  submit review `, err);
    }
}

// Manage the offer watch
export function* ratingWatcher() {
    yield takeEvery(actions.LOAD_RECENT_REVIEWS, loadRecentReviews)
    yield takeEvery(actions.SAVE_PRODUCT_RATING_AND_REVIEW, saveProductRatingAndReview)
    yield takeEvery(actions.LOAD_RATING_AND_REVIEWS_BY_ITEM, loadRatingAndReviewByItem)
}