import React from "react";
import "../style.css";
import logo from "../assets/makeup-logo.png";

const main = () => {
    return (
        <div className="mainBody">
            {/* for booking link */}
            <a href="#">
                <div className="booking">
                    <p>Click Here For Booking</p>
                </div>
            </a>
            {/* Logo and title space */}
            <div className="header">
                <a href="#">
                    <i class="fas fa-bars"></i>
                </a>
                <h1 className="title">Makeup By Maniya</h1>
                <h2>Houston Makeup Artist</h2>
            </div>
            {/* div for border */}
            <div className="dash"></div>
        </div>
    );
};

export default main;
