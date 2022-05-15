import React from "react";
import "./styles/styles.css";
import Contact from "./pages/Contact.js";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import { Container } from "react-bootstrap";
import Comments from "./components/Comments";
import Services from "./components/Services.js";
import Footer from "./components/Footer.js";
import CommentAPI from "./pages/CommentAPI";
import FileUpload from "./components/FileUpload";

function App() {
    return (
        <div className="App">
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
        </div>
    );
}

export default App;
