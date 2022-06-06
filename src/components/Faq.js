import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import data from "../assets/data/faqData";
import "../styles/comments.css";

const Comments = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <p className="faq-word">FAQ'S</p>
            <div className="comment-box">
                <Carousel
                    variant="dark"
                    activeIndex={index}
                    onSelect={handleSelect}
                >
                    {data.map((item) => {
                        return (
                            <Carousel.Item>
                                <div className="review-box">
                                    <div className="question">
                                        {item.question}
                                    </div>
                                    <div className="answer">{item.answer}</div>
                                </div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Comments;
