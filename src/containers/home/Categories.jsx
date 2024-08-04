import React from "react";
import "../../styles/includes/categories.scss";
import CategoryImg1 from "../../../public/category-img1.png";
import CategoryImg2 from "../../../public/category-img2.png";
import CategoryImg3 from "../../../public/category-img3.png";
import CategoryImg4 from "../../../public/category-img4.png";
import CategoryImg5 from "../../../public/category-img5.png";
import CategoryImg6 from "../../../public/category-img6.png";
import CategoryImg7 from "../../../public/category-img7.png";
import CategoryImg8 from "../../../public/category-img8.png";

const categoriesData = [
  { imgSrc: CategoryImg1, title: "Stitched Saree" },
  { imgSrc: CategoryImg2, title: "Gown" },
  { imgSrc: CategoryImg3, title: "Lehanga" },
  { imgSrc: CategoryImg4, title: "Salwar Suit" },
  { imgSrc: CategoryImg5, title: "Kurti" },
  { imgSrc: CategoryImg6, title: "Anarkali" },
  { imgSrc: CategoryImg7, title: "Kids Wear" },
  { imgSrc: CategoryImg8, title: "Uniforms" },
];

const Categories = () => {
  return (
    <div className="categories">
      {categoriesData.map((category, index) => (
        <div className="category" key={index}>
          <div className="category-img">
            <img src={category.imgSrc} alt={category.title} />
          </div>
          <h5>{category.title}</h5>
        </div>
      ))}
    </div>
  );
};

export default Categories;
