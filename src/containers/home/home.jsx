import React from "react";
import Hero from "./Hero";
import TalkUs from "../../components/homeTalk/homeTalk";
import Services from "./Services";
import Categories from "./Categories";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";

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
      <Services />
      <Categories />
      <About />
      <WhyChooseUs />
      <TalkUs />
    </section>
  );
};

export default Home;
