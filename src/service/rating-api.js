import ApiGateway from './api-gateway';

import DataLoader from './data-loader';

const MOCK_FILE_NAME_RECENT_REVIEWS  = 'customer-testimonials.json';

const RatingApi = {

    getRecentRating: function getRecentRating(maxResults) {
        let url = `enc-rating/recent?maxResults=${maxResults}`;
        return DataLoader.get(url, MOCK_FILE_NAME_RECENT_REVIEWS);
    },
    saveProductRatingAndReview: function saveProductRatingAndReview(customerId, productId, reviewText, rating) {
        let url = `ratings/${productId}?ratingType=PRODUCT&customerId=${customerId}`;
        const reviewRatingReq = {
            "reviewText":reviewText,
            "ratingDetail": {
                "rating": rating
            }
        }
        return ApiGateway.post(url, reviewRatingReq);
    },
    getRatingAndReviewByItem: function getRatingAndReviewByItem(itemId) {
        let url = `ratings/${itemId}`;
        return ApiGateway.get(url);
    }
} 

export default RatingApi;