import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//actions
import { getNewProducts } from "../../actions/product-action";
//util
import * as constants from "../../util/constants";
import utils from "../../util/utils";
//images
import recentWork from "../../assets/recent-works.png";

const RecentWorks = () => {
  const dispatch = useDispatch();

  const newProducts = useSelector((state) => state.productState.newProducts);
  const isNewProductLoading = useSelector(
    (state) => state.productState.isNewProductLoading
  );

  useEffect(() => {
    dispatch(getNewProducts([]));
  }, [dispatch]);

  const renderSkeletonCard = (index) => (
    <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
      <div className="imagesContainer">
        <Skeleton height={255} width={300} />
      </div>
    </SkeletonTheme>
  );

  return (
    <div className="recentWorks">
      {isNewProductLoading ? (
        <>
          <div key={`recent-work-skeleton-0`} className="imagesContainer">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
              <Skeleton height={255} width={300} />
            </SkeletonTheme>
          </div>
          {[...Array(3)].map((_, index) => renderSkeletonCard(index))}
        </>
      ) : (
        <>
          <div key={`recent-work-0`} className="imagesContainer">
            <img src={recentWork} alt="Recent Works" />
          </div>
          {newProducts &&
            newProducts.slice(0, 3).map((product) => (
              <div key={product.id} className="imagesContainer">
                <img
                  src={utils.prepareImgUrl(
                    constants.IMG_FOLDER_PRODUCTS,
                    product.primaryMedia.url
                  )}
                  alt={product.name}
                />
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default RecentWorks;
