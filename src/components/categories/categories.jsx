//libs
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
//action
import { loadCategories } from "../../actions/category-action";
//util
import * as constants from "../../util/constants";
import utils from "../../util/utils";
//images
import whatsapp from "../../assets/whatsapp2.png";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categoryState.categories);
  const categoriesLoading = useSelector(
    (state) => state.categoryState.categoriesLoading
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    dispatch(loadCategories());
  };

  // Memoized filtered and chunked categories
  const filteredCategories = useMemo(
    () =>
      categories.filter(
        (category) =>
          category.service === constants.SERVICE_UNIFORMS_BULK_ORDERS
      ),
    [categories] 
  );

  // Memoized chunked categories (combining both filtered and placeholder data)
  const categoryChunks = useMemo(() => {
    // Chunking function
    const chunkCategories = (categories) => {
      const chunks = [];
      let i = 0;
      while (i < categories.length) {
        const firstTwo = categories.slice(i, i + 2);
        i += 2;
        if (firstTwo.length) chunks.push(firstTwo);

        const nextThree = categories.slice(i, i + 3);
        i += 3;
        if (nextThree.length) chunks.push(nextThree);
      }
      return chunks;
    };

    if (categoriesLoading) {
      // Placeholder data structure
      const placeholderCategory = { id: "", name: "", media: [{ url: "" }] };
      const placeholderData = Array.from(
        { length: 7 },
        () => placeholderCategory
      );
      return chunkCategories(placeholderData);
    } else {
      return chunkCategories(filteredCategories);
    }
  }, [categoriesLoading, filteredCategories]);

  const renderCard = (category) => (
    <div
      key={category.id}
      className="cards"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent, black), url(${utils.prepareImgUrl(
          constants.IMG_FOLDER_CATEGORIES,
          category.media[0].url
        )})`,
      }}
    >
      <p>{category.name.toUpperCase()}</p>
      <a
        href={`https://wa.me/+917200168295`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsapp} alt="WhatsApp" />
      </a>
    </div>
  );

  const renderSkeletonCard = (index) => (
    <SkeletonTheme key={index} baseColor="#202020" highlightColor="#444">
      <p>
        <Skeleton className="cards" />
      </p>
    </SkeletonTheme>
  );

  return (
    <div className="cards-container">
      {categoryChunks.map((chunk, index) => (
        <div
          key={index}
          className={chunk.length === 2 ? "twoContainer" : "threeContainer"}
        >
          {categoriesLoading
            ? chunk.map((_, index) => (
                <div key={index}>{renderSkeletonCard()}</div>
              ))
            : chunk.map((category) => (
                <div key={category.id}>{renderCard(category)}</div>
              ))}
        </div>
      ))}
    </div>
  );
};

export default Categories;
