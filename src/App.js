import React from "react";
import "./style.scss";
import Main from "./pages/Main";
import NavigationBar from "./components/NavigationBar";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
function App() {
    return (
        // <div className="App">
        //     <Main />
        //     <NavigationBar />
        // </div>
        <NavigationBar />
    );
}

export default App;
