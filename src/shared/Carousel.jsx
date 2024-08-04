import React, { useState } from "react";

const Carousel = ({ images, imagesPerPage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalPages = Math.ceil(images.length / imagesPerPage);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0"
              style={{ flex: `0 0 ${100 / imagesPerPage}%` }}
            >
              <img
                src={image.src}
                className="w-full h-[140px] lg:h-auto"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 flex flex-col justify-center ml-[14%] font-bold text-white">
                <p
                  style={{ fontFamily: "Ms Madi, cursive" }}
                  className="mt-2 mr-2 font-normal text-2xl lg:text-5xl"
                >
                  {image.Bulk}
                </p>
                <h2 className="text-2xl lg:text-5xl font-bold">
                  {image.title}
                </h2>
                <p className="mr-2 font-normal text-sm lg:text-xl">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full mx-2 ${
              currentIndex === index ? "bg-[#ff9600]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
