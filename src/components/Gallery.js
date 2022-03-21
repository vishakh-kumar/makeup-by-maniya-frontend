import React, { useState, useEffect } from "react";
import img1 from "../assets/galleryphotos/1.jpeg";
import img2 from "../assets/galleryphotos/2.jpeg";
import img3 from "../assets/galleryphotos/3.jpeg";
import img4 from "../assets/galleryphotos/4.jpeg";
import img5 from "../assets/galleryphotos/5.jpeg";
import img6 from "../assets/galleryphotos/6.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "../styles/gallery.css";

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
    ];
    const [modal, setModal] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModal(true);
    };
    return (
        <>
            <div className={modal ? "modal open" : "modal"}>
                <img src={tempImgSrc} />
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setModal(false)}
                />
            </div>
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
