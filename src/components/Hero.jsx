import React from "react";
import Carousel from "../shared/Carousel"; // Adjust the import path as needed
import uniform from "../../public/school uniform.png";
import college from "../../public/college.png";
import Card from "../shared/Card";
const Hero = () => {
  const images = [
    {
      src: "../../public/Hero.png",
      title: "UNIFORM",
      description: "Tailoring",
      Bulk: "Bulk",
    },
    {
      src: "../../public/Hero.png",
      title: "UNIFORM",
      description: "Tailoring",
      Bulk: "Bulk",
    },
    {
      src: "../../public/Hero.png",
      title: "UNIFORM",
      description: "Tailoring",
      Bulk: "Bulk",
    },
    {
      src: "../../public/Hero.png",
      title: "UNIFORM",
      description: "Tailoring",
      Bulk: "Bulk",
    },
  ];

  return (
    <div>
      <Carousel images={images} imagesPerPage={1} />
      <Cards />
    </div>
  );
};

const Cards = () => {
  return (
    <div className="py-8 px-[8%]">
      <div className="grid grid-cols-2  gap-4 ">
        <Card src={uniform} alt="School Uniform" title="SCHOOL UNIFORM" />
        <Card src={college} alt="College" title="COLLEGE" />
      </div>
      <div className="grid py-8 grid-cols-3  gap-4 ">
        <Card src={uniform} alt="School Uniform" title="SCHOOL UNIFORM" />
        <Card src={college} alt="College" title="COLLEGE" />
        <Card src={college} alt="College" title="COLLEGE" />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="relative w-full max-h-[500px] rounded-xl overflow-hidden">
  <img src={uniform} alt={"."} className="w-full h-auto object-cover" />
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
  <p className="absolute inset-x-0 bottom-12 text-white text-center">
    SCHOOL UNIFORM
  </p>
</div>; */
}
