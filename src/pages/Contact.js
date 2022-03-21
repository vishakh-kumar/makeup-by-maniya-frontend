import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
        <Container>
            <div className="contact-page-title">Baka bkaha bkaha</div>
            <div className="page-insta">
                DM on{" "}
                <a
                    href="https://www.instagram.com/makeupbymaniya/"
                    target="_blank"
                >
                    {" "}
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
        </Container>
    );
};

export default Contact;
