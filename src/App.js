import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Contact from "./pages/Contact.js";
import ThankYou from "./pages/ThankYou";
import Main from "./pages/main";
import Faq from "./pages/Faq";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/contactme" element={<Contact />} />
                <Route path="/thankyou" element={<ThankYou />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
        </div>
    );
}

export default App;
