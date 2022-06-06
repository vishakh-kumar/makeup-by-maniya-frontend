import React, { useState } from "react";
import data from "../assets/data/galleryData";
import { Modal } from "react-bootstrap";
import "../styles/gallery.css";

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };
    return (
        <>
            <Modal
                size="lg"
                show={model}
                onHide={() => setModel(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Body>
                    <img src={tempImgSrc} style={{ width: "100%" }} />
                </Modal.Body>
            </Modal>
            <div className="gallery-word">Gallery</div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div
                            className="pics"
                            key={{ index }}
                            onClick={() => getImg(item.imgSrc)}
                        >
                            <img src={item.imgSrc} style={{ width: "100%" }} />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Gallery;
