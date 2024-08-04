import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { loadRecentReviews } from "../../actions/rating-action";
import * as constants from "../../util/constants";
import utils from "../../util/utils";

const CustomerSays = () => {
  const dispatch = useDispatch();

  const recentReviews = useSelector((state) => state.ratingState.recentReviews);
  const isRecentReviewLoading = useSelector(
    (state) => state.ratingState.isRecentReviewLoading
  );
  const error = useSelector((state) => state.ratingState.error);

  useEffect(() => {
    dispatch(loadRecentReviews());
  }, [dispatch]);

  // State to track which testimonial should display video
  const [videoIndex, setVideoIndex] = useState(null);

  // Memoized chunked reviews (combining both actual and placeholder data)
  const reviewChunks = useMemo(() => {
    const chunkReviews = (reviews) => {
      const chunks = [];
      for (let i = 0; i < reviews.length; i += 3) {
        chunks.push(reviews.slice(i, i + 3));
      }
      return chunks;
    };

    if (isRecentReviewLoading) {
      // Placeholder data structure
      const placeholderReview = {
        id: "",
        coverPhoto: "",
        author: "",
        mediaType: "", // Assuming mediaType to distinguish between image and video
        mediaUrl: "", // Adjust placeholder structure as needed
      };
      const placeholderData = Array.from(
        { length: 9 },
        () => placeholderReview
      );
      return chunkReviews(placeholderData);
    } else {
      return chunkReviews(recentReviews);
    }
  }, [isRecentReviewLoading, recentReviews]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <MdKeyboardArrowRight color="white" className="slick-prev" />,
    prevArrow: <MdKeyboardArrowLeft color="white" className="slick-next" />,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderCard = (review, index) => (
    <div key={review.id}>
      {review.mediaType === "video" && videoIndex === index ? (
        <div className="video-player">
          <video controls width="100%" height="260px">
            <source
              src={utils.prepareImgUrl(
                constants.IMG_FOLDER_CUSTOMER_TESTIMONIALS,
                review.mediaUrl
              )}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <img
          src={utils.prepareImgUrl(
            constants.IMG_FOLDER_CUSTOMER_TESTIMONIALS,
            review.coverPhoto
          )}
          className="carousel-container"
          alt={review.author}
          onClick={() => setVideoIndex(index)}
        />
      )}
    </div>
  );

  const renderSkeletonCard = (index) => (
    <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
      <div className="flex">
        <Skeleton height={260} className="carousel-container" />
      </div>
    </SkeletonTheme>
  );

  return (
    <div className="slider-container" style={{ padding: "0 5%", width: "98%" }}>
      <Slider {...settings}>
        {isRecentReviewLoading ? (
          reviewChunks.map((chunk, index) =>
            chunk.map((_, idx) => renderSkeletonCard(index * 3 + idx))
          )
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          reviewChunks.map((chunk, index) =>
            chunk.map((review, idx) => (
              <div key={review.id}>{renderCard(review, index * 3 + idx)}</div>
            ))
          )
        )}
      </Slider>
    </div>
  );
};

export default CustomerSays;
