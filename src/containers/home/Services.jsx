import React from "react";
import ServiceImg1 from "../../../public/premium.jpg";
import ServiceImg2 from "../../../public/elite.jpg";
import ServiceImg3 from "../../../public/bulk.jpg";
import "../../styles/includes/services-section.scss";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <Link to="#">
        <div className="service">
          <img src={ServiceImg1} alt="service1" />
        </div>
      </Link>
      <Link to="#">
        <div className="service">
          <img src={ServiceImg2} alt="service2" />
        </div>
      </Link>
      <Link to="bulk-uniform-tailoring">
        <div className="service">
          <img src={ServiceImg3} alt="service3" />
        </div>
      </Link>
    </div>
  );
};

export default Services;
