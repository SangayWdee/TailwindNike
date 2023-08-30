import Buttons from "../components/Buttons.jsx";
import {shoe8} from "../assets/images/index.js";

const SuperQuality = () => {
    return(
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
                <div className="flex flex-1 flex-col">
                    <h1 className="font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
                        We Provide You <span className="text-coral-red inline-block mt-3">Super</span> Quality <span className="text-coral-red inline-block mt-3">Shoes</span>
                    </h1>
                    <p className="lg:max-w-lg mt-4 info-text">
                        Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                        <br/> <br/>
                        Our dedication to detail and excellence ensures your satisfaction</p>
                    <div className="mt-11">
                        <Buttons label="View Details" />
                    </div>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
                </div>
        </section>
    )
}

export default SuperQuality