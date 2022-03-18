import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import First from "../assets/photos/1.jpeg";
import Second from "../assets/photos/2.jpeg";
import Third from "../assets/photos/3.jpeg";

const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            style={{ marginLeft: "-35px" }}
            variant="dark"
            activeIndex={index}
            onSelect={handleSelect}
        >
            <Carousel.Item>
                <img
                    style={{ height: "100%" }}
                    className="d-block w-100"
                    src={First}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "100%" }}
                    className="d-block w-100"
                    src={Second}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: "100%" }}
                    className="d-block w-100"
                    src={Third}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageSlider;
