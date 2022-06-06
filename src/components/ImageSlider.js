import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/photos/carousalphotos/1.jpeg";
import img2 from "../assets/photos/carousalphotos/2.jpeg";
import img3 from "../assets/photos/carousalphotos/3.jpeg";
import img4 from "../assets/photos/carousalphotos/4.jpeg";

const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
    ];

    return (
        <div className="box-carousel">
            <Carousel
                variant="dark"
                activeIndex={index}
                onSelect={handleSelect}
            >
                {data.map((item, index) => {
                    return (
                        <Carousel.Item>
                            <img
                                style={{ height: "100%" }}
                                className="d-block w-100"
                                id="carousel-img"
                                src={item.imgSrc}
                                alt="Slide Images"
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ImageSlider;
