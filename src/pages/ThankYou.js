import React from "react";
import makeuplogo from "../assets/makeup-logo.png";
import { Link } from "react-router-dom";
import "../styles/thankyou.css";
const ThankYou = () => {
    return (
        <div className="thankyou-page">
            <p className="thankyou">Thank You!</p>
            <p className="thankyou-for">For Your Inquiry</p>
            <Link style={{ textDecoration: "none", color: "#af3753" }} to="/">
                <p className="return-main-page">
                    Click here to return to the main page
                </p>
                <div className="makeuplogo">
                    <img
                        className="makeuplogo1"
                        src={makeuplogo}
                        alt="makeuplogo"
                    />
                </div>
            </Link>
        </div>
    );
};

export default ThankYou;
