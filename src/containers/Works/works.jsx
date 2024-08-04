import React from "react";
import Hero from "./Hero";
import TalkUs from "../../components/homeTalk/homeTalk";
import Step from "./Step";
import Step1Img from "../../../public/hiw-step-1.png";
import Step2Img from "../../../public/hiw-step-2.png";
import Step3Img from "../../../public/hiw-step-3.png";
import Step4Img from "../../../public/hiw-step-4.png";

const Home = () => {
  const openWhatsApp = () => {
    const phoneNumber = "+917200168295"; // Replace with the actual phone number in international format, e.g., '1234567890'
    const message = "Hello, I would like to chat with you."; // Optional message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <section className="homeBackground" style={{ position: "relative" }}>
      <Hero />
      <div
        className="chat"
        style={{
          position: "fixed",
          bottom: "0vw",
          height: "56px",
          cursor: "pointer",
          width: "56px",
          left: "97vw",
          transform: "translate(-100%, -100%)",
          zIndex: 10,
        }}
        onClick={openWhatsApp}
      ></div>
      <Step
        imgSrc={Step1Img}
        stepNumber="01"
        title="Book Your Slot"
        description="Call or WhatsApp for a personalized appointment."
        order="normal"
      />
      <Step
        imgSrc={Step2Img}
        stepNumber="02"
        title="Van Comes to You"
        description="Our mobile fitting unit arrives at your doorstep."
        order="inverse"
      />
      <Step
        imgSrc={Step3Img}
        stepNumber="03"
        title="Expert Fitting"
        description="Our skilled team ensures accurate and personalized measurements."
        order="normal"
      />
      <Step
        imgSrc={Step4Img}
        stepNumber="04"
        title="Style Consultation"
        description="Discuss your preferences and get expert fashion advice."
        order="inverse"
      />
      <TalkUs />
    </section>
  );
};

export default Home;
