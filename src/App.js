import React from "react";
import "./styles.css";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
function App() {
    return (
        <div className="App">
            <NavigationBar />
            <ImageSlider />
        </div>
    );
}

export default App;
