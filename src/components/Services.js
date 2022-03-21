import React from "react";
import "../styles/services.css";
import Selfi from "../assets/photos/portrait.jpeg";
import MakeupIcon from "../assets/icons/makeup-icon.png";
import ResumeIcon from "../assets/icons/resume-icon.png";
import FavoriteIcon from "../assets/icons/favorite-icon.png";
const Services = () => {
    return (
        <div className="services">
            <div className="services-content">
                <div className="services-content-box">
                    <img className="services-content-icon" src={MakeupIcon} alt="makeup icon" />
                    <p className="services-heading">Make-Up Services</p>
                    <p className="services-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam, nulla?
                    </p>
                </div>
                <div className="services-content-box">
                    <img className="services-content-icon" src={ResumeIcon} alt="makeup icon" />
                    <p className="services-heading">Experience</p>
                    <p className="services-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam, nulla?
                    </p>
                </div>
                <div className="services-content-box">
                    <img className="services-content-icon"
                        src={FavoriteIcon}
                        style={{ color: "white" }}
                        alt="makeup icon"
                    />
                    <p className="services-heading">Favorite Products</p>
                    <p className="services-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Numquam, nulla?
                    </p>
                </div>
            </div>
            <div className="services-img">
                <img src={Selfi} alt="selfie" className="services-img-selfie" />
            </div>
        </div>
    );
};

export default Services;
