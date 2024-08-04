import ApiGateway from './api-gateway';

const WishlistApi = {
    getWishlist: function getWishlist() {
        let url = `enc-wishlist`;
        return ApiGateway.get(url);
    },
    
    addToWishlist: function addToRecentView(customerId, productId) {
        let url = `enc-wishlist/item?productId=${productId}&customerId=${customerId}`;
        return ApiGateway.post(url, {});
    },

    deleteFromWishlist: function deleteFromWishlist(customerId, orderId, productId) {
        let url = `enc-wishlist/${orderId}/items/${productId}?customerId=${customerId}`;
        return ApiGateway.remove(url, {});
    },
} 

export default WishlistApi;
