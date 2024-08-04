//libs
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
//actions
import {loadRecentReviews} from '../../actions/rating-action';
//utils
import utils from '../../util/utils';

import reviewIcon from '../../styles/images/quote.png';

const MAX_REVIEWS = 10;

const CustomerReviews = () => {

    const recentReviews  = useSelector((state) => state.ratingState.recentReviews);
    const isRecentReviewLoading  = useSelector((state) => state.ratingState.isRecentReviewLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRecentReviews();
    }, []);

    const fetchRecentReviews = () => {
        dispatch(loadRecentReviews(MAX_REVIEWS));
    }

    if(recentReviews == null || recentReviews.length < 1) return (<></>)

    return (
        <></>
    )
}
export default CustomerReviews




