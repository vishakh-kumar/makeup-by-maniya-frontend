import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Container } from "react-bootstrap";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import data from "../assets/data/faqData";
import "../styles/faq.css";

const Faq = () => {
    return (
        <>
            <NavigationBar />
            <Container>
                <h1 className="heading-faq">Frequently Asked Questions</h1>
                {data.map((item, index) => {
                    return (
                        <Accordion className="faq-box">
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header className="questions-faq">
                                    {item.question}
                                </Accordion.Header>
                                <Accordion.Body className="answers-faq">
                                    {item.answer}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    );
                })}
                <>
                    <p className="further-questions">
                        For further questions reach out to me{" "}
                        <Link to="/contactme" className="here-link">
                            here
                        </Link>
                        .
                    </p>
                </>
            </Container>
            <Footer />
        </>
    );
};

export default Faq;
