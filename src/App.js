import React from "react";
import "./styles.css";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import Intro from "./components/Intro";
function App() {
    return (
        <div className="App">
            {/* <NavigationBar />
            <ImageSlider /> */}
            <Intro />
        </div>
    );
}

export default App;
