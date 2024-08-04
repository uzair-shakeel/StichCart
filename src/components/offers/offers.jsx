import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//actions
import { loadAllOfferForOfferTile } from "../../actions/offer-action";
//util
import * as constants from "../../util/constants";
import utils from "../../util/utils";

const Offers = () => {
  const dispatch = useDispatch();

  const offers = useSelector((state) => state.offerState.offerTileOffers);
  const isOfferTileOffersLoading = useSelector(
    (state) => state.offerState.isOfferTileOffersLoading
  );

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = () => {
    dispatch(loadAllOfferForOfferTile());
  };

  const renderSkeletonOffers = () => {
    // Adjust number of skeletons as needed
    const skeletons = Array.from({ length: 1 }).map((_, index) => (
      <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
        <div className="imagesContainer">
          <Skeleton height={200} width="100%" />
        </div>
      </SkeletonTheme>
    ));
    return skeletons;
  };

  const renderOffer = (offer) => (
    <div key={offer.id} className="imagesContainer">
      <img
        src={utils.prepareImgUrl(constants.IMG_FOLDER_OFFER, offer.imageUrl)}
        alt=""
        className="image"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );

  return (
    <div className="offers-container">
      {isOfferTileOffersLoading
        ? renderSkeletonOffers()
        : offers.slice(0, 1).map((offer) => renderOffer(offer))}
    </div>
  );
};

export default Offers;
