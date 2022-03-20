import React from "react";
import "./styles/styles.css";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import { Container } from "react-bootstrap";
function App() {
    return (
        <div className="App">
            {/* <NavigationBar />
            <Container fluid>
                <ImageSlider />
                <Intro />
            </Container> */}
            <Gallery />
        </div>
    );
}

export default App;
