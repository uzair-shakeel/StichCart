import React from "react";
import "../../styles/includes/home-about.scss";
import AboutImg from "../../../public/About-img.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="img-box">
        <img src={AboutImg} alt="about-img" />
      </div>
      <div className="about-texts">
        <h3>About Stitch Cart</h3>
        <div className="paras">
          <p>
            Welcome to STITCHCART PRIVATE LIMITED, a dynamic enterprise that
            stands at the intersection of education, tailoring, and fashion
            retailing. Our journey began with a visionary woman, Ms. Umavathy,
            who embarked on a mission to empower individuals through skill
            development and redefine fashion trends. This is the story of how
            UMA TAILORING INSTITUTE (UTI, KANCHIPURAM) evolved into Stitchcart
            Private Limited over the course of four decades.
          </p>
          <p>
            Building on our rich legacy, we proudly introduced “Stitchcart” in
            2021. Stitchcart.co.in and Android app “stitchcart” is our digital
            platform for custom tailoring, designed to bring the art of
            personalised fashion to your fingertips. Located in the vibrant area
            of Chromepet, our new facility at No. 5, 6th Main Road, New Colony,
            Chennai 600044, complements our existing facilities in Tambaram.
            Here, you can experience the convenience of modern technology
            intertwined with the timeless art of tailoring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
