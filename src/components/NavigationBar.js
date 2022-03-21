import React, { useState } from "react";
import BrandName from "../assets/brand_name.png";
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
                            src={BrandName}
                            alt="Brand Name"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="#" className="contactme">
                        <FontAwesomeIcon
                            className="contactme-icon"
                            icon={faEnvelope}
                        />
                        <p className="contactme-text"> Contact Me</p>
                    </Navbar.Brand>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Make-Up By Maniya</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have
                            the elements you have chosen. Like, text, images,
                            lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
