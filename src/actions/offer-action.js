import {createRequestTypes,
    action,
    REQUEST,
    SUCCESS,
    FAILURE
} from './base-action'

export const LOAD_OFFER_FOR_OFFER_TILE = 'LOAD_OFFER_FOR_OFFER_TILE'
export const LOAD_OFFER_FOR_OFFER_TILE_VAR = createRequestTypes(LOAD_OFFER_FOR_OFFER_TILE)

export const getOfferTileOffers = {
    request: () => action(LOAD_OFFER_FOR_OFFER_TILE_VAR[REQUEST], {}),
    success: (offers) => action(LOAD_OFFER_FOR_OFFER_TILE_VAR[SUCCESS], {offers}),
    failure: (error) => action(LOAD_OFFER_FOR_OFFER_TILE_VAR[FAILURE], { error}),
}

export const loadAllOfferForOfferTile = () => action(LOAD_OFFER_FOR_OFFER_TILE, {})