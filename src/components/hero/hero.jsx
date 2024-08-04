import React from "react";
import imga from "../../../public/mobile.png";
import imgb from "../../../public/Hero2.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={imgb} alt="" className="large" />
      <img src={imga} alt="" className="small" />
    </div>
  );
};

export default Hero;
