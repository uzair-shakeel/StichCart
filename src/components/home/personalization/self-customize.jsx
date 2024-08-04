//libs
import { useNavigate } from "react-router-dom";
import selfCustomizeMobileImg from "../../../styles/images/self-customize-mobile.png";
const SelfCustomize = () => {
  const navigate = useNavigate();

  const handleCustomize = () => {
    navigate(`/quote`);
  };
  return (
    <>
      <div className="personalisation">
        <div className="p-content">
          <div className="contentdiv">
            <h3>Self Customise</h3>
            <p>Tailor - make your dream outfits by one click</p>
            <div
              className="btn btn-primary white"
              onClick={() => handleCustomize()}
            >
              Customise Now
            </div>
          </div>
        </div>
      </div>
      <div className="personalisation mobileview">
        <img src={selfCustomizeMobileImg} />
        <div>
          <h3>Self Customise</h3>
          <p>Tailor - make your dream outfits by one click</p>
          <p>
            <a href="#" onClick={() => handleCustomize()}>
              Customise now
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SelfCustomize;
