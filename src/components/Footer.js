import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";
const Footer = ({ position }) => {
    return (
        <>
            <div className="footer" style={{ position: position }}>
                <div className="footer-left">
                    <p className="footer-copyright">
                        <FontAwesomeIcon icon={faCopyright} /> MakeupByManiya
                    </p>
                    <p className="footer-website-name">Make-Up By Maniya</p>
                </div>
                <div className="footer-right">
                    <p className="footer-social">
                        Social Media
                        <a
                            href="https://www.instagram.com/makeupbymaniya/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                className="social-icons"
                                icon={faInstagram}
                            />
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
