//libs
import { Carousel } from "react-responsive-carousel";

//images
import howItWork1 from '../../styles/images/howitwork-2.png';
import howItWork2 from '../../styles/images/howitwork-1.png';
import howItWork3 from '../../styles/images/howitwork-3.svg';

const HowItWorks = () => {

    const getHowItWorkContent = (imgSrc, header, desc, className) => {
        return(
            <div className={className}>
                <img src={imgSrc} />
                <div>
                    <h3>{header}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        )
    }

    const renderWeb = () => {
        return(
            <>
                <div className="howitworks">
                    {
                        getHowItWorkContent(howItWork1, 'Home Pickup', 'Provide doorstep service and collect fabric from you', "howitworks-content")
                    }
                    {
                        getHowItWorkContent(howItWork2, 'Customised Stitching', 'Design your cloths as you wish', "howitworks-content")
                    }
                    {
                        getHowItWorkContent(howItWork3, 'Fast Delivery', 'Provide doorstep service and deliver your cloths.', "howitworks-content")
                    }
                </div>

            </>
        )
    }


    return (
        <>
            <h2>How it Works</h2>
            {
                renderWeb()
            }
            
        </>
    )
}

export default HowItWorks;