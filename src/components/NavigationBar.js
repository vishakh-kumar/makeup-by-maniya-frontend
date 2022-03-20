import React from "react";
import BrandName from "../assets/brand_name.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <>
            <Navbar
                sticky="top"
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
                        aria-controls="offcanvasNavbar"
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
                    <Navbar.Offcanvas
                        style={{ backgroundColor: "light" }}
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title
                                style={{ color: "black" }}
                                id="offcanvasNavbarLabel"
                            >
                                Make-Up By Maniya
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-start flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Contact Me</Nav.Link>
                                <Nav.Link href="#action2">
                                    Favorite Products
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;
