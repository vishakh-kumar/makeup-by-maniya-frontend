import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "../styles/contactPage.css";
const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(data[key])
            )
            .join("&");
    };
    //for redirect
    const navigate = useNavigate();
    const handleRedirect = () => {
        navigate("/thankyou");
    };

    // form submission
    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...form }),
        })
            .then(() => handleRedirect())
            .catch((error) => alert(error));
        e.preventDefault();
    };
    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
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
                <form
                    name="Contact"
                    onSubmit={handleSubmit}
                    method="POST"
                    data-netlify="true"
                >
                    <label>
                        Name:
                        <input
                            type="text"
                            onChange={handleChange}
                            name="name"
                            className="input"
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            onChange={handleChange}
                            name="email"
                            className="input"
                        />
                    </label>
                    <label>
                        Services Required:
                        <input
                            type="text"
                            onChange={handleChange}
                            name="service-required"
                            className="input"
                        />
                    </label>
                    <label>
                        Date From:
                        <input
                            type="date"
                            onChange={handleChange}
                            name="date-from"
                            className="input"
                        />
                    </label>
                    <label>
                        Date To:
                        <input
                            type="date"
                            onChange={handleChange}
                            name="date-to"
                            className="input"
                        />
                    </label>
                    <label>
                        Event Time:
                        <input
                            type="text"
                            onChange={handleChange}
                            name="event-time"
                            className="input"
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
