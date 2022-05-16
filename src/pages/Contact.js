import React, { useRef } from "react";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/contactPage.css";
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
            <Container>
                <div className="contact-page-title">Contact Me</div>
                <p>For inquiries or any concerns, you can reach me at </p>
                <div className="page-insta">
                    <a
                        href="https://www.instagram.com/makeupbymaniya/"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} /> @makeupbymaniya
                    </a>
                </div>
                <p>Or</p>
                <form ref={form} onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            className="input"
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            className="input"
                            required
                        />
                    </label>
                    <label>
                        Services Required:
                        <input
                            type="text"
                            name="service-required"
                            className="input"
                            required
                        />
                    </label>
                    <label>
                        Date From:
                        <input type="date" name="date-from" className="input" />
                    </label>
                    <label>
                        Date To:
                        <input type="date" name="date-to" className="input" />
                    </label>
                    <label>
                        Event Time:
                        <input
                            type="text"
                            name="event-time"
                            className="input"
                        />
                    </label>
                    <label>
                        Further Queries:
                        <textarea
                            name="questions"
                            row="4"
                            className="textarea"
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </Container>
            <Footer position="absolute" />
        </>
    );
};

export default Contact;
