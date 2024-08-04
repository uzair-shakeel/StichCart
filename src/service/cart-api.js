import ApiGateway from './api-gateway';

const CartApi = {

    getCart: function getCart() {
        let url = `enc-cart`;
        return ApiGateway.get(url);
    },

    addToCart: function addToCart(productId, qty, addOns) {
        let url = `enc-cart/item?productId=${productId}&quantity=${qty}&addOns=${addOns}`;
        return ApiGateway.put(url);

    },

    // Not used
    addToCartWithProductOptions: function addToCartWithProductOptions(customerId, req) {
        let url = `enc-cart-custid/item?customerId=${customerId}`;
        return ApiGateway.post(url, req);
    },

    updateCartItemQuantity: function updateCartItemQuantity(itemId, quantity, isIncludeExpDeliveryDate) {
        let url = `enc-cart/items/${itemId}?quantity=${quantity}&includedExpectedDeliveryDate=${isIncludeExpDeliveryDate}`;
        return ApiGateway.put(url);

    },

    removeItemFromCart: function removeItemFromCart(itemId) {
        let url = `enc-cart/items/${itemId}`;
        return ApiGateway.remove(url);
    },

    addOfferCodeToCart: function addOfferCodeToCart(cartId, offerCode) {
        let url = `cart/${cartId}/offer/${offerCode}`;
        return ApiGateway.post(url);
    },

    removeOfferCodeFromCart: function removeOfferCodeFromCart(cartId, offerCode) {
        let url = `cart/${cartId}/offer/${offerCode}`;
        return ApiGateway.remove(url,{});
    },

    addAddonToCartItem: function addAddonToCartItem(cartItemId, addonId) {
        let url = `enc-cart/items/${cartItemId}/addon/${addonId}`;
        return ApiGateway.post(url);
    },

    removeAddonFromCartItem: function removeAddonFromCartItem(cartItemId, addonItemId) {
        let url = `enc-cart/items/${cartItemId}/addon/${addonItemId}`;
        return ApiGateway.remove(url,{});
    },

    addQuoteToCart: function addQuoteToCart(quoteId) {
        let url = `enc-cart/item?productId=0&quantity=1&quoteId=${quoteId}`;
        return ApiGateway.put(url);

    }

} 

export default CartApi;