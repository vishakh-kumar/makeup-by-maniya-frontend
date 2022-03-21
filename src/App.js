import React from "react";
import "./styles/styles.css";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import Intro from "./components/Intro";
import Gallery from "./components/Gallery";
import { Container } from "react-bootstrap";
import Comments from "./components/Comments";
function App() {
    return (
        <div className="App">
            {/* <NavigationBar />
            <Container fluid>
                <div>
                    <ImageSlider />
                </div>
                <div>
                    <Intro />
                </div>
    <div>*/}
            <Gallery />
            {/*    </div>
            </Container>
            <Comments /> */}
        </div>
    );
}

export default App;
