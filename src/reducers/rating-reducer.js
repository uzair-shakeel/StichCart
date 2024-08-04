import initialstate from './initialstate';

function RatingReducers(prevState = 
    {   isRecentReviewLoading: false,
        recentReviews: initialstate.recentReviews,
        addReviewAndRatingLoading : false,
        reviewAndRating: {},
        reviewRatingSaved: false,
        isRatingAndReviewLoading: false,
        ratingAndReview: {}
    }, action) {
    switch (action.type) {
        case 'LOAD_RECENT_REVIEWS_REQUEST':
            return { ...prevState, isRecentReviewLoading: true , error: ''};
        case 'LOAD_RECENT_REVIEWS_SUCCESS':
            return { ...prevState, isRecentReviewLoading: false, recentReviews: action.recentReviews, error: '', message:'' };
        case 'LOAD_RECENT_REVIEWS_FAILURE':
            return { ...prevState, isRecentReviewLoading: false, error: action.error};
        case 'ADD_PRODUCT_RATING_AND_REVIEWS_REQUEST':
            return { ...prevState, addReviewAndRatingLoading: true , error: '', reviewRatingSaved: false};
        case 'ADD_PRODUCT_RATING_AND_REVIEWS_SUCCESS':
            return { ...prevState, addReviewAndRatingLoading: false, reviewRatingSaved: true, reviewAndRating: action.reviewAndRating, error: '', message:'' };
        case 'ADD_PRODUCT_RATING_AND_REVIEWS_FAILURE':
            return { ...prevState, addReviewAndRatingLoading: false, reviewRatingSaved: false, error: action.error};
        case 'GET_RATING_AND_REVIEW_OF_ITEM_REQUEST':
            return { ...prevState, isRatingAndReviewLoading: true , error: ''};
        case 'GET_RATING_AND_REVIEW_OF_ITEM_SUCCESS':
            return { ...prevState, isRatingAndReviewLoading: false, ratingAndReview: action.ratingAndReview, error: '', message:'' };
        case 'GET_RATING_AND_REVIEW_OF_ITEM_FAILURE':
            return { ...prevState, isRatingAndReviewLoading: false, error: action.error};

        default:
            return prevState;
    }
}

export default RatingReducers;