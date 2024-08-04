import Config from '../../../config/appconfig';
//images
import mobileUnitImg from '../../../styles/images/mobile-unit.png';
import mobileUnitMobileImg from '../../../styles/images/mobile-unit1.png';

const MobileUnit = () => {
    return (
        <>
        <div className="mobile-unit">
            <div className="m-content">
                <div>
                    <h4>Mobile Unit</h4>
                    <p className="purple">Tailor - make your dream outfits by one click</p>
                    <p>Call us: {`${Config.contact.phone}`}</p>
                </div>
                <img src={mobileUnitImg} />
            </div>
        </div>
        <div className="mobile-unit mobileview">
            <img src={mobileUnitMobileImg} />
            <div><h3>Mobile Unit</h3>
                <p>Tailor - make your dream outfits by one click</p>
            <p>Call us: {`${Config.contact.phone}`}</p></div>
        </div>
        </>
    )
}

export default MobileUnit;