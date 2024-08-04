import React from "react";
import imga from "../../../public/how-it-works-bg.png";
import imgb from "../../../public/how-it-works-bg-mobile.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={imga} alt="" className="large" />
      <img src={imgb} alt="" className="small" />
    </div>
  );
};

export default Hero;
