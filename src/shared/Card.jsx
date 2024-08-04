import React from "react";

const Card = ({ src, alt, title }) => {
  return (
    <div className="relative w-full max-h-[500px] rounded-xl overflow-hidden">
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      <p className="absolute inset-x-0 bottom-12 text-white text-center">
        {title}
      </p>
    </div>
  );
};

export default Card;
