import React from "react";
import "../../styles/includes/hiw-step.scss";

const Step = ({ imgSrc, stepNumber, title, description, order }) => {
  return (
    <section className={`step-container ${order === "inverse" ? "order" : ""}`}>
      <div className={`img-container ${order === "inverse" ? "order" : ""}`}>
        <img src={imgSrc} alt={`step${stepNumber}-img`} />
      </div>
      <div className={`step-texts ${order === "inverse" ? "order" : ""}`}>
        <div className="step-number">{stepNumber}</div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Step;
