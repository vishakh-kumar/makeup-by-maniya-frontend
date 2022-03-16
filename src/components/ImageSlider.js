import React, { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className="slider">
            <i class="fas fa-chevron-left" />
            <i class="fas fa-chevron-right" />
            {SliderData.map((slide, index) => {
                return (
                    <img
                        src={slide.image}
                        alt="random"
                        className="sliderImage"
                    />
                );
            })}
        </section>
    );
};

export default ImageSlider;
