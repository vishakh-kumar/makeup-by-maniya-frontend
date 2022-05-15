import React from "react";
import NavigationBar from "../components/NavigationBar";
import ImageSlider from "../components/ImageSlider";
import Intro from "../components/Intro";
import Gallery from "../components/Gallery";
import { Container } from "react-bootstrap";
import Comments from "../components/Comments";
import Services from "../components/Services.js";
import Footer from "../components/Footer.js";

const Main = () => {
    return (
        <>
            <NavigationBar />
            <Container fluid>
                <ImageSlider />

                <Intro />

                <Gallery />
            </Container>
            <Comments />
            <Container fluid>
                <Services />
            </Container>
            <Footer />
        </>
    );
};

export default Main;
