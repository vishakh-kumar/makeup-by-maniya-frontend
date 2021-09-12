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
                    <p className="details">(281)248-6367</p>
                    <a href="https://www.instagram.com/makeupbymaniya/">
                        <p className="details">@makeupbymaniya</p>
                    </a>
                    <p className="details">makeupbymaniya@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default main;
