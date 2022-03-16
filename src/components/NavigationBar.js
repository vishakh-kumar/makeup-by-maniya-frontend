import React from "react";
import "../style.css";
import { Link, Router, Route } from "react-router-dom";
const NavigationBar = () => {
    return (
        <ul className="navbar">
            <li>
                <a href="" className="button">
                    HOME
                </a>
            </li>
            <li>
                <a href="" className="button">
                    REVIEWS
                </a>
            </li>
            <li>
                <a href="" className="button">
                    F.A.Q.
                </a>
            </li>
            <li>
                <a href="" className="button">
                    CONTACT
                </a>
            </li>
            <li>
                <a href="" className="button">
                    INSTAGRAM
                </a>
            </li>
        </ul>
    );
};

export default NavigationBar;
