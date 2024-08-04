import InitialState from './initialstate';

function offerReducers(prevState = { isOfferTileOffersLoading: false, offerTileOffers : InitialState.offerTileOffers}, action) {
    switch (action.type) {
        case 'LOAD_OFFER_FOR_OFFER_TILE_REQUEST':
            return { ...prevState, isOfferTileOffersLoading: true , error: ''};
        case 'LOAD_OFFER_FOR_OFFER_TILE_SUCCESS':
            return { ...prevState, isOfferTileOffersLoading: false, offerTileOffers: action.offers, error: '', message:'' };
        case 'LOAD_OFFER_FOR_OFFER_TILE_FAILURE':
            return { ...prevState, isOfferTileOffersLoading: false, error: ''};
        default:
            return prevState;
    }
}

export default offerReducers;