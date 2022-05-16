import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Contact from "./pages/Contact.js";
import ThankYou from "./pages/ThankYou";
import Main from "./pages/main";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/contactme" element={<Contact />} />
                <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
        </div>
    );
}

export default App;
