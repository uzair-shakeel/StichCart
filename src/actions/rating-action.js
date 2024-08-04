import {createRequestTypes,
    action,
    REQUEST,
    SUCCESS,
    FAILURE
} from './base-action'

export const LOAD_RECENT_REVIEWS = 'LOAD_RECENT_REVIEWS'
export const SAVE_PRODUCT_RATING_AND_REVIEW = 'SAVE_PRODUCT_RATING_AND_REVIEW'
export const LOAD_RATING_AND_REVIEWS_BY_ITEM = 'LOAD_RATING_AND_REVIEWS_BY_ITEM'

export const LOAD_RECENT_REVIEWS_VAR = createRequestTypes(LOAD_RECENT_REVIEWS)
export const SAVE_PRODUCT_RATING_AND_REVIEW_VAR = createRequestTypes(SAVE_PRODUCT_RATING_AND_REVIEW)
export const LOAD_RATING_AND_REVIEWS_BY_ITEM_VAR = createRequestTypes(LOAD_RATING_AND_REVIEWS_BY_ITEM)

export const recentReviews = {
    request: () => action(LOAD_RECENT_REVIEWS_VAR[REQUEST], {}),
    success: (recentReviews) => action(LOAD_RECENT_REVIEWS_VAR[SUCCESS], {recentReviews}),
    failure: (error) => action(LOAD_RECENT_REVIEWS_VAR[FAILURE], {error}),
}

export const ratingAndReviewOfItem = {
    request: () => action(LOAD_RATING_AND_REVIEWS_BY_ITEM_VAR[REQUEST], {}),
    success: (ratingAndReview) => action(LOAD_RATING_AND_REVIEWS_BY_ITEM_VAR[SUCCESS], {ratingAndReview}),
    failure: (error) => action(LOAD_RATING_AND_REVIEWS_BY_ITEM_VAR[FAILURE], {error}),
}

export const addProductRatingAndReview = {
    request: () => action(SAVE_PRODUCT_RATING_AND_REVIEW_VAR[REQUEST], {}),
    success: (reviewAndRating) => action(SAVE_PRODUCT_RATING_AND_REVIEW_VAR[SUCCESS], {reviewAndRating}),
    failure: (customer, error) => action(SAVE_PRODUCT_RATING_AND_REVIEW_VAR[FAILURE], {customer, error}),
}

export const loadRecentReviews = (maxResults, requiredFields = []) => action(LOAD_RECENT_REVIEWS, {maxResults, requiredFields})
export const saveProductRatingAndReview = (customerId, productId, reviewText, rating) => action(SAVE_PRODUCT_RATING_AND_REVIEW, {customerId,  productId, reviewText, rating})
export const loadRatingAndReviewByItem = (itemId, requiredFields = []) => action(LOAD_RATING_AND_REVIEWS_BY_ITEM, {itemId, requiredFields})


