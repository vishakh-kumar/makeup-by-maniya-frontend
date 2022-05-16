import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/styles.css";
import Contact from "./pages/Contact.js";
import CommentAPI from "./pages/CommentAPI";
import FileUpload from "./components/FileUpload";
import ThankYou from "./pages/ThankYou";
import Main from "./pages/Main";

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
