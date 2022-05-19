import React, { useState } from "react";
import img1 from "../assets/galleryphotos/1.jpeg";
import img2 from "../assets/galleryphotos/2.jpeg";
import img3 from "../assets/galleryphotos/3.jpeg";
import img4 from "../assets/galleryphotos/4.jpeg";
import img5 from "../assets/galleryphotos/5.jpeg";
import img6 from "../assets/galleryphotos/6.jpeg";
import img7 from "../assets/galleryphotos/7.jpeg";
import img8 from "../assets/galleryphotos/8.jpeg";
import img9 from "../assets/galleryphotos/9.jpeg";
import img10 from "../assets/galleryphotos/10.jpeg";
import img11 from "../assets/galleryphotos/11.jpeg";
import img12 from "../assets/galleryphotos/12.jpeg";
import img13 from "../assets/galleryphotos/13.jpeg";
import img14 from "../assets/galleryphotos/14.jpeg";
import img15 from "../assets/galleryphotos/15.jpeg";
import img16 from "../assets/galleryphotos/16.jpeg";
import img17 from "../assets/galleryphotos/17.jpeg";
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
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
    ];
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };
    return (
        <>
            <div className={model ? "model-open" : "model"}>
                <img src={tempImgSrc} />
                <FontAwesomeIcon
                    icon={faXmark}
                    onClick={() => setModel(false)}
                />
            </div>
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
