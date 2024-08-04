import React from "react";
import Button from "../button/button";
import image from "../../assets/Group 87.png";

const homeBanner = () => {
  return (
    <div className="homeBanner">
      <div className="first">
        <h5>Top-notch custom tailoring fory our bulk requirements.</h5>
        <p>
          We are fully equipped to fulfil all your bulk orders promptly and
          efficiently, with high standards of excellence.
        </p> 
        <Button
          className="btnStyle btn-primary"
          label="Book your fitting today"
        />
      </div>
      <div className="image">{/* <img src={image} /> */}</div>
    </div>
  );
};

export default homeBanner;
