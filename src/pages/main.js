import React from "react";
import "../style.css";
import logo from "../assets/makeup-logo.png";
import nobara from "../assets/nobara.jpeg";

const main = () => {
    return (
        <div className="mainBody">
            <div className="logoDiv">
                <img
                    className="logo"
                    style={{ alignSelf: "center" }}
                    src={logo}
                    alt="logo"
                />
            </div>
            <div className="title">
                <h1>Maniya Imam</h1>
                <h3>Professional Makeup Artist</h3>
            </div>
            <div className="contact">
                <div className="icons">
                    <i class="fas fa-phone-alt" />
                    <i class="fab fa-instagram" style={{ fontWeight: 600 }} />
                    <i class="far fa-envelope" />
                </div>
                <div className="description">
                    <a href="tel:+12812486367">
                        <p className="details phone">(281)248-6367</p>
                    </a>
                    <a href="https://www.instagram.com/makeupbymaniya/">
                        <p className="details insta">@makeupbymaniya</p>
                    </a>
                    <a href="mailto:makeupbymaniya@gmail.com">
                        <p className="details email">
                            makeupbymaniya@gmail.com
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default main;
