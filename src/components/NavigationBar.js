import React, { useState } from "react";
import makeuplogo from "../assets/makeup-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const NavigationBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Navbar
                expand={false}
                style={{
                    backgroundColor: "white",
                    borderBottom: "1px solid",
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
                    <Navbar.Brand href="#">
                        <img
                            className="brandName"
                            src={makeuplogo}
                            alt="Brand Name"
                        />
                    </Navbar.Brand>
                    <Link to="/contactme">
                        <Navbar.Brand className="contactme">
                            <FontAwesomeIcon
                                className="contactme-icon"
                                icon={faEnvelope}
                            />
                            <p className="contactme-text"> Contact Me</p>
                        </Navbar.Brand>
                    </Link>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ fontSize: "35px" }}>
                                Make-Up By Maniya
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <p className="offcanvas-texts">
                                <Link exact to="/">
                                    HomePage
                                </Link>
                            </p>
                            <p className="offcanvas-texts">
                                <Link to="/contactme">Contact Me</Link>
                            </p>
                            <p className="offcanvas-texts">
                                <a
                                    href="https://www.instagram.com/makeupbymaniya/"
                                    target="_blank"
                                >
                                    Social Media
                                </a>
                            </p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
