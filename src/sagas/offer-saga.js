import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/offer-action';
import  OfferApi from '../service/offer-api';
import LoggerApi from '../service/sclogger-api';
import * as constants from '../util/constants';
const { getOfferTileOffers } = actions;

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* loadAllOfferForOfferTile(action) {
    try {
        yield put(getOfferTileOffers.request()); 
        const response = yield call(OfferApi.loadAllOfferForOfferTile);
        console.log('response.data offer', response.data)
        yield put(getOfferTileOffers.success(response.data));
    }catch (err) {
        yield put(getOfferTileOffers.failure('Sorry, there was an error loading the offers. Please try again'));
        LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in get all offer for offer tile display`, err);
    }
}

// Manage the offer watch
export function* offerWatcher() {
    yield takeEvery(actions.LOAD_OFFER_FOR_OFFER_TILE, loadAllOfferForOfferTile)
}
  

