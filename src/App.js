import React from "react";
import "./styles.css";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import Intro from "./components/Intro";
import { Container } from "react-bootstrap";
function App() {
    return (
        <div className="App">
            <Container fluid>
                <NavigationBar />
                <ImageSlider />
                <Intro />
            </Container>
        </div>
    );
}

export default App;
