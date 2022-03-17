import React from "react";
import BrandName from "../assets/brand_name.png";
import "../style.scss";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <>
            <Navbar
                className="navigation-bar"
                sticky="top"
                bg="light"
                expand={false}
            >
                <Container fluid>
                    <Navbar.Toggle
                        className="burger-menu"
                        aria-controls="offcanvasNavbar"
                    />
                    <Navbar.Brand href="#">
                        <img src={BrandName} alt="Brand Name" />
                    </Navbar.Brand>
                    <Navbar.Brand href="#">Contact Me</Navbar.Brand>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
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
