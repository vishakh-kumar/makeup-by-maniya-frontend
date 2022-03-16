import React from "react";
import "./style.css";
import Main from "./pages/main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
function App() {
    return (
        // <div className="App">
        //     <Main />
        //     <NavigationBar />
        // </div>
        <ImageSlider slides={SliderData} />
    );
}

export default App;
