import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//actions
import { loadCategories } from "../../actions/category-action";
//utils
import * as constants from "../../util/constants";
import utils from "../../util/utils";
import "../../styles/includes/categories.scss";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categoryState.categories);
  const categoriesLoading = useSelector(
    (state) => state.categoryState.categoriesLoading
  );

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const filteredCategories = useMemo(
    () =>
      categories
        .filter(
          (category) =>
            (category.service === constants.SERVICE_PREMIUM_STITCHING ||
              category.service ===
                constants.SERVICE_ELITE_CELEBRATION_STITCHING) &&
            category.service !== constants.SERVICE_BULK_UNIFORM
        )
        .slice(0, 8),
    [categories]
  );

  // Get a random image URL from category media
  const getRandomImageUrl = (media) => {
    if (media && media.length > 0) {
      const randomIndex = Math.floor(Math.random() * media.length);
      const randomImage = media[randomIndex];
      // Ensure that the image URL is correctly formed
      const imageUrl = utils.prepareImgUrl(
        constants.IMG_FOLDER_CATEGORIES,
        randomImage.url
      );
      console.log("Random Image URL:", imageUrl); // Debug log
      return imageUrl;
    }
    return "/path/to/default/image.png"; // Fallback image
  };

  const renderCategory = (category) => {
    const imgUrl = getRandomImageUrl(category.media);

    return (
      <div className="category" key={category.id}>
        <div className="category-img">
          <img
            src={imgUrl}
            alt={category.name}
            onError={() => {
              console.error(`Failed to load image for ${category.name}`);
              // Optionally set a fallback image here
            }}
          />
        </div>
        <h5>{category.name}</h5>
      </div>
    );
  };

  const renderSkeleton = () => (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton className="category" />
      </p>
    </SkeletonTheme>
  );

  return (
    <div className="categories">
      {categoriesLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div className="category" key={index}>
              {renderSkeleton()}
            </div>
          ))
        : filteredCategories.map((category) => renderCategory(category))}
    </div>
  );
};

export default Categories;
