import { all } from "redux-saga/effects";
import { loginWatcher } from "../sagas/auth-saga";
import { eventLogWatcher } from "../sagas/eventlog-saga";
import { categoryWatcher } from "../sagas/category-saga";
import { ratingWatcher } from "../sagas/rating-saga";
import { offerWatcher } from "../sagas/offer-saga";
import { productWatcher } from '../sagas/product-saga';
import { customerCommentsWatcher } from "../sagas/customercomments-saga";

export default function* rootWatchers() {
  yield all([
    loginWatcher(),
    eventLogWatcher(),
    offerWatcher(),
    categoryWatcher(),
    ratingWatcher(),
    customerCommentsWatcher(),
    productWatcher()
  ]);
}
