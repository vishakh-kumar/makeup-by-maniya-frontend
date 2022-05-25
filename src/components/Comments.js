import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/comments.css";

const Comments = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const data = [
        {
            question: "Coming Soon...",
            answer: "....",
        },
    ];

    return (
        <>
            <p className="faq-word">FAQ'S</p>
            <div className="comment-box">
                <Carousel
                    variant="dark"
                    activeIndex={index}
                    onSelect={handleSelect}
                >
                    {data.map((item, index) => {
                        return (
                            <Carousel.Item className="review-box">
                                <div className="comment">{item.question}</div>
                                <div className="name">{item.answer}</div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Comments;
