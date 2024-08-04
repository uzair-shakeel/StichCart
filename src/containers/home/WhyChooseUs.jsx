import React from "react";
import "../../styles/includes/why-choose-us.scss";
import ConvenienceIcon from "../../../public/convenience-icon.png";
import expertCraftsIcon from "../../../public/expert-craftsmanship-icon.png";
import PersonalizedExpIcon from "../../../public/personalized-experience-icon.png";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h3>Why Choose Us?</h3>
      <div className="benifits">
        <div className="benefit">
          <span className="icon">
            <img src={ConvenienceIcon} alt="benifit1" />
          </span>
          <h4>Convenience</h4>
          <p>Save time and effort with our at-home tailoring service.</p>
        </div>
        <div className="benefit">
          <span className="icon">
            <img src={expertCraftsIcon} alt="benifit1" />
          </span>
          <h4>Expert Craftsmanship</h4>
          <p>
            Our skilled tailors are committed to delivering high-quality,
            customized garments.
          </p>
        </div>
        <div className="benefit">
          <span className="icon">
            <img src={PersonalizedExpIcon} alt="benifit1" />
          </span>
          <h4>Personalized Experience</h4>
          <p>
            Enjoy a one-on-one consultation to ensure your clothing is tailored
            to perfection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
