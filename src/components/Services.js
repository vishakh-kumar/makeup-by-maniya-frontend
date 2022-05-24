import React from "react";
import "../styles/services.css";
import Video from "../assets/videos/1.mp4";
import MakeupIcon from "../assets/icons/makeup-icon.png";
import ResumeIcon from "../assets/icons/resume-icon.png";
import FavoriteIcon from "../assets/icons/favorite-icon.png";
const Services = () => {
    return (
        <div className="services">
            <div className="services-content">
                <div className="services-content-box">
                    <img
                        className="services-content-icon"
                        src={MakeupIcon}
                        alt="makeup icon"
                    />
                    <p className="services-heading">Make-Up Services</p>
                    <p className="services-desc">Coming Soon...</p>
                </div>
                <div className="services-content-box">
                    <img
                        className="services-content-icon"
                        src={ResumeIcon}
                        alt="makeup icon"
                    />
                    <p className="services-heading">Experience</p>
                    <p className="services-desc">Coming Soon...</p>
                </div>
                <div className="services-content-box">
                    <img
                        className="services-content-icon"
                        src={FavoriteIcon}
                        style={{ color: "white" }}
                        alt="makeup icon"
                    />
                    <p className="services-heading">Favorite Products</p>
                    <p className="services-desc">Coming Soon...</p>
                </div>
            </div>
            <div className="services-img">
                <video
                    className="services-video"
                    src={Video}
                    width="300"
                    controls="controls"
                    autoPlay="true"
                    muted="true"
                ></video>
            </div>
        </div>
    );
};

export default Services;
