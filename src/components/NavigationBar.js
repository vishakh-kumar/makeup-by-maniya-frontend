import React, { useState } from "react";
import makeuplogo from "../assets/makeup-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import {
    Navbar,
    Container,
    Offcanvas,
    Nav,
    NavDropdown,
} from "react-bootstrap";

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar
                expand={false}
                style={{
                    backgroundColor: "#fedcdb",
                    borderBottom: "0.5px solid #FF6863",
                    borderColor: "rgb(230,230,230)",
                }}
            >
                <Container fluid>
                    <Navbar.Toggle
                        style={{
                            border: "none",
                            color: "rgb(255,0,0,0)",
                        }}
                        onClick={handleShow}
                    >
                        <FontAwesomeIcon className="menubar" icon={faBars} />
                    </Navbar.Toggle>
                    <Navbar.Brand href="/">
                        <img
                            className="brandName"
                            src={makeuplogo}
                            alt="Brand Name"
                        />
                    </Navbar.Brand>

                    <Navbar.Brand href="/contactme" className="contactme">
                        <FontAwesomeIcon
                            className="contactme-icon"
                            icon={faEnvelope}
                        />
                        <p className="contactme-text"> Contact Me</p>
                    </Navbar.Brand>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontSize: "35px" }}>
                                Make-Up By Maniya
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav.Link
                                style={{ color: "#af3753", fontSize: "25px" }}
                                href="/"
                            >
                                HomePage
                            </Nav.Link>

                            <Nav.Link
                                style={{ color: "#af3753", fontSize: "25px" }}
                                href="/contactme"
                            >
                                Contact Me
                            </Nav.Link>
                            <Nav.Link
                                style={{ color: "#af3753", fontSize: "25px" }}
                                href="/faq"
                            >
                                Frequently Asked Questions
                            </Nav.Link>

                            <NavDropdown
                                style={{ fontSize: "25px" }}
                                title="Social Media"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                        fontSize: "20px",
                                    }}
                                    href="https://www.instagram.com/makeupbymaniya/"
                                    target="_blank"
                                >
                                    Instagram
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
