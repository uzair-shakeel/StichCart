import React from "react";
import ServiceImg1 from "../../../public/premium.jpg";
import ServiceImg2 from "../../../public/elite.jpg";
import ServiceImg3 from "../../../public/bulk.jpg";
import "../../styles/includes/services-section.scss";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={ServiceImg1} alt="service1" />
      </div>
      <div className="service">
        <img src={ServiceImg2} alt="service2" />
      </div>
      <div className="service">
        <img src={ServiceImg3} alt="service3" />
      </div>
    </div>
  );
};

export default Services;
