import SelfCustomize from "./self-customize";
import MobileUnit from "./mobile-unit";
import ContactStylist from "./contact-stylst";

const Personalization = () => {
  return (
    <>
      <h2>Personalisation</h2>
      <SelfCustomize />
      <div className="displayflex mobileview">
        <ContactStylist />
        <MobileUnit />
      </div>
    </>
  );
};

export default Personalization;
