import React, { useRef } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/contactPage.css";
import NavigationBar from "../components/NavigationBar";
const Contact = () => {
    const form = useRef();
    //for redirect
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/thankyou");
    };

    // form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_cbv96ag",
                "template_8avk1i5",
                form.current,
                "cXMKyMky8K9cT3wWo"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            )
            .then(handleRedirect());
    };
    return (
        <>
            <NavigationBar />
            <Container>
                <div className="contact-page-title">Contact Me</div>
                <p className="for-inquiries">
                    For inquiries or any concerns, you can reach me at
                </p>
                <div className="page-insta">
                    <a
                        className="page-insta"
                        href="https://www.instagram.com/makeupbymaniya/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} /> @makeupbymaniya
                    </a>
                </div>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>Or</p>
                <form className="contact-me" ref={form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="input"
                        required
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        name="email"
                        className="input"
                        required
                        placeholder="Email"
                    />
                    <input
                        type="text"
                        name="service-required"
                        className="input"
                        required
                        placeholder="Services Required"
                    />
                    From:
                    <input
                        style={{ marginTop: 0 }}
                        type="date"
                        name="date-from"
                        className="input"
                    />
                    To:
                    <input
                        style={{ marginTop: 0 }}
                        type="date"
                        name="date-to"
                        className="input"
                    />
                    <input
                        type="text"
                        name="event-time"
                        className="input"
                        placeholder="Event Time"
                    />
                    <textarea
                        name="questions"
                        row="4"
                        className="textarea"
                        placeholder="Further Queries"
                    />
                    <button className="submit-button" type="submit">
                        Submit
                    </button>
                </form>
            </Container>
            <Footer />
        </>
    );
};

export default Contact;
