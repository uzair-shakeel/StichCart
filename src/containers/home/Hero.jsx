import React from "react";
import "../../styles/includes/home-hero.scss";
import car from "../../../public/car-hd.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <h4>Introducing Couture on Wheels</h4>
      <h1>
        Your Doorstep <br /> Dress Measurement Van!
      </h1>
      <div className="img-container">
        <img src={car} alt="van-img" />
      </div>
      <div className="call-box">
        <h6>
          Call or WhatsApp Now <br />
          +91 72001 68295
        </h6>
      </div>
    </div>
  );
};

export default Hero;
