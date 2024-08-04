//libs
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { loadAllOfferForOfferTile } from "../../actions/offer-action";
const Offers = () => {
  // const offers = useSelector((state) =>state.offerState.offerTileOffers);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = () => {
    dispatch(loadAllOfferForOfferTile());
  };

  return <></>;
};

export default Offers;
