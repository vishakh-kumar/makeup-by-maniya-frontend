import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import data from "../assets/data/carousalData";

const ImageSlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

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
