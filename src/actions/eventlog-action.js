export const LOG_LOGIN = 'LOG_LOGIN'
export const LOG_ADD_TO_CART = 'LOG_ADD_TO_CART'
export const LOG_VIEW_ITEM = 'LOG_VIEW_ITEM'
export const LOG_VIEW_CART = 'LOG_VIEW_CART'
export const LOG_REMOVE_FROM_CART = 'LOG_REMOVE_FROM_CART'
export const LOG_BEGIN_CHECKOUT = 'LOG_BEGIN_CHECKOUT'
export const LOG_ADD_SHIPING_INFO = 'LOG_ADD_SHIPING_INFO'
export const LOG_PURCHASE = 'LOG_PURCHASE'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function action(type, payload = {}) {
    return {type, ...payload}
}

export const logLogin = (method, customer, requiredFields = []) => action(LOG_LOGIN, { method, customer, requiredFields})
export const logAddToCart = (customer, item,  requiredFields = []) => action(LOG_ADD_TO_CART, { customer, item, requiredFields})
export const logViewItem = (customer, item,  requiredFields = []) => action(LOG_VIEW_ITEM, { customer, item, requiredFields})
export const logViewCart = (customer, cartItems,  requiredFields = []) => action(LOG_VIEW_CART, { customer, cartItems, requiredFields})
export const logRemoveFromCart = (customer, item,  requiredFields = []) => action(LOG_REMOVE_FROM_CART, { customer, item, requiredFields})
export const logBeginCheckout = (customer, cartItems,  requiredFields = []) => action(LOG_BEGIN_CHECKOUT, { customer, cartItems, requiredFields})
export const logAddShippingInfo = (customer, cartItems,  requiredFields = []) => action(LOG_ADD_SHIPING_INFO, { customer, cartItems, requiredFields})
export const logPurchase = (customer, cartItems,  requiredFields = []) => action(LOG_PURCHASE, { customer, cartItems, requiredFields})







