import DataLoader from './data-loader';

const MOCK_FILE_NAME = 'offers.json';

const OfferApi = {

    loadAllOfferForOfferTile: function loadOfferForOfferTile() {
        let url = `enc-offer/offers/tile`;
        return DataLoader.get(url, MOCK_FILE_NAME);
    }

} 

export default OfferApi;