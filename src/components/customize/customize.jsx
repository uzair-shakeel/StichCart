import React from "react";
import Button from "../button/button";
import Offers from "../offers/offers";
//Images
import offer from "../../assets/offer.png";

import "../../styles/includes/customizeBanner.scss"; //Uzair remove this

const customize = () => {
  return (
    <div className="customize">
      <div className="customizeBanner">
        {/* <h4>Bulk</h4> */}
        <h3>
          Self <br />
          Customise
        </h3>
        <p>
          Tailor - make your dream <br />
          outfits by one click
        </p>
        <Button className="btn-customPrimary" label="Get Quote" />
      </div>

      <Offers />
    </div>
  );
};

export default customize;
