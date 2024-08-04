import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/eventlog-action';
//import analytics from '@react-native-firebase/analytics';
import Utils from '../util/utils';

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* logLogin(action) {
    try {
        //analytics().logLogin({"method:": action.method});
    } catch (err) {
        console.log(err);
    }
}

export function* logAddToCart(action) {
    try {
        let addToCartEventParameters = {
            "currency":"INR",
            "value": action.item.retailPrice.amount,
            "items": [
                {
                    "item_id": `${action.item.id}`,
                    "item_name" : action.item.name
                }
            ]
        };
        //analytics().logAddToCart(addToCartEventParameters);
    } catch (err) {
        console.log(err);
    }
}

export function* logViewItem(action) {
    try {
        let ViewItemEventParameters = {
            "currency":"INR",
            "value": action.item.retailPrice.amount,
            "items": [
                {
                    "item_id": `${action.item.id}`,
                    "item_name" : action.item.name
                }
            ]
        };
        //analytics().logViewItem(ViewItemEventParameters);
    } catch (err) {
        console.log(err);
    }
}

export function* logViewCart(action) {
    try {
        let cartItems = action.cartItems;

        if (cartItems != null) {
            let itemsView = [];
            if (cartItems.orderItems) {
                let orderItems = cartItems.orderItems;
                orderItems.forEach(function (item) {
                    let itemView = {
                        "item_id": `${item.id}`,
                        "item_name": item.name
                    };
                    itemsView.push(itemView);
                });
            }
            let viewItemEventParameters = {
                "currency" : "INR",
                "value": cartItems.total.amount,
                "items": itemsView
            };
            //analytics().logViewCart(viewItemEventParameters);
        };

    } catch (err) {
        console.log(err);
    }
}

export function* logRemoveFromCart(action) {
    try {
        let amount = action.item.totalPrice.amount / action.item.quantity;
        let removeFromCartEventParameters = {
            "currency":"INR",
            "value": amount,
            "items": [
                {
                    "item_id": `${action.item.productId}`,
                    "item_name" : action.item.name
                }
            ]
        };
        //analytics().logRemoveFromCart(removeFromCartEventParameters);
    } catch (err) {
        console.log(err);
    }
}

export function* logBeginCheckout(action) {
    try {
        let cartItems = action.cartItems;

        if (cartItems != null) {
            let itemsView = [];
            if (cartItems.orderItems) {
                let orderItems = cartItems.orderItems;
                orderItems.forEach(function (item) {
                    let itemView = {
                        "item_id": `${item.id}`,
                        "item_name": item.name
                    };
                    itemsView.push(itemView);
                });
            }
            let beginCheckoutEventParameters = {
                "currency" : "INR",
                "value": cartItems.total.amount,
                "items": itemsView
            };
            //analytics().logBeginCheckout(beginCheckoutEventParameters);
        };
    } catch (err) {
        console.log(err);
    }
}

export function* logAddShippingInfo(action) {
    try {
        let cartItems = action.cartItems;

        if (cartItems != null) {
            let itemsView = [];
            if (cartItems.orderItems) {
                let orderItems = cartItems.orderItems;
                orderItems.forEach(function (item) {
                    let itemView = {
                        "item_id": `${item.id}`,
                        "item_name": item.name
                    };
                    itemsView.push(itemView);
                });
            }
            let addShippingInfoParameters = {
                "currency" : "INR",
                "value": cartItems.total.amount,
                "items": itemsView
            };
            //analytics().logAddShippingInfo(addShippingInfoParameters);
        };
    } catch (err) {
        console.log(err);
    }
}

export function* logPurchase(action) {
    try {
        let cartItems = action.cartItems;

        if (cartItems != null) {
            let itemsView = [];
            if (cartItems.orderItems) {
                let orderItems = cartItems.orderItems;
                orderItems.forEach(function (item) {
                    let itemView = {
                        "item_id": `${item.id}`,
                        "item_name": item.name
                    };
                    itemsView.push(itemView);
                });
            }
            let purchaseEventParameters = {
                "currency" : "INR",
                "value": cartItems.total.amount,
                "items": itemsView
            };
            //analytics().logPurchase(purchaseEventParameters);
        };
    } catch (err) {
        console.log('logPurchase',err);
    }
}

// Manage EventLog watch
export function* eventLogWatcher() {
    yield takeEvery(actions.LOG_LOGIN, logLogin)
    yield takeEvery(actions.LOG_ADD_TO_CART, logAddToCart)
    yield takeEvery(actions.LOG_VIEW_ITEM, logViewItem)
    yield takeEvery(actions.LOG_VIEW_CART, logViewCart)
    yield takeEvery(actions.LOG_REMOVE_FROM_CART, logRemoveFromCart)
    yield takeEvery(actions.LOG_BEGIN_CHECKOUT, logBeginCheckout)
    yield takeEvery(actions.LOG_ADD_SHIPING_INFO, logAddShippingInfo)
    yield takeEvery(actions.LOG_PURCHASE, logPurchase)
}