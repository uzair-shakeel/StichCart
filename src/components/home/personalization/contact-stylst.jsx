import Config from "../../../config/appconfig";

//images
import stylishImg from "../../../styles/images/stylish.png";
import stylishMobImg from "../../../styles/images/contact.png";

const ContactStylist = () => {
  return (
    <>
      <div className="contact-styli">
        <div className="m-content">
          <div>
            <h4>Contact Stylist</h4>
            <p className="purple">
              Fashionista - style your dream outfits by contacting us.
            </p>
            <p>Call us: {`${Config.contact.phone}`}</p>
            <p>WhatsApp: {`${Config.contact.whatsapp}`}</p>
          </div>
          <img src={stylishImg} />
        </div>
      </div>
      <div className="contact-styli mobileview">
        <div>
          <h3>Contact Stylist</h3>
          <p>Fashionista - style your dream outfits by contacting us</p>
          <p>Call us: {`${Config.contact.phone}`}</p>
        </div>
        <img src={stylishMobImg} />
      </div>
    </>
  );
};

export default ContactStylist;
