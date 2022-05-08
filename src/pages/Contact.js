import React from "react";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/contactPage.css";
const Contact = () => {
    return (
        <>
            <Container style={{ height: "100%" }}>
                <div className="contact-page-title">Lorem, ipsum dolor.</div>
                <div className="page-insta">
                    DM on{" "}
                    <a
                        href="https://www.instagram.com/makeupbymaniya/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
                <p>Or</p>
                <form>
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Full Name"
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                    <input
                        type="services-required"
                        name="services-required"
                        id="services-required"
                        placeholder="Services Required"
                    />
                    <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Date"
                    />
                    <input
                        type="text"
                        name="time"
                        id="time"
                        placeholder="Event Time"
                    />
                    <button type="submit">Submit</button>
                </form>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
