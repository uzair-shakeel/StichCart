import React from "react";
import Button from "../button/button";
import { MdArrowOutward } from "react-icons/md";

const HomeTalk = () => {
  return (
    <div className="home-talk">
      <div className="home-talk__button-container">
        <a href={`tel:+917200168295`}>
          <Button
            className="btn-outline whatsapp-btn"
            label="Call or WhatsApp Now"
          />
        </a>
      </div>
      <h1 className="home-talk__heading">
        Book your appointment now and experience the luxury of personalized
        tailoring without stepping out of your home
      </h1>
      <div className="home-talk__button-container">
        <button className="btn-transparent">
          Let's Talk Us <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default HomeTalk;
