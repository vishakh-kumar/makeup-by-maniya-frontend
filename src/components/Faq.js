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
            question: "What products do you use?",
            answer: "I have tried and tested different brands for years that are high-end and luxury. My kit is a collection of my most favorite products that I have tried and tested on myself and others!",
        },
        {
            question: "Do you clean your kit / brushes and how often?",
            answer: "Yes, I clean my kit and brushes after every appointment. I clean my makeup with alcohol and disinfectant and brushes with brush soaps from real techniques and a beauty blender.",
        },
        {
            question: "Do you travel on location?",
            answer: "Yes, as of right now I only offer on-location services, unless there is a complication and you need to come to me.",
        },
        {
            question: "Do you provide lashes?",
            answer: "Yes, lashes are included in each package.",
        },
        {
            question: "What do you need from the client?",
            answer: "A fresh clean face and a table workspace for me to provide the services!",
        },
        {
            question: "Is it cheaper if I bring my own products?",
            answer: "No, I will not lower my price if you ask me to use your own products and in most cases, I will not use products that aren’t in my kit, unless there are medical reasons.",
        },
        {
            question: "Do you do hair?",
            answer: "Yes but I only take hair appointments if makeup is also wanted. I can style hair if there are 2-3 people at the party. If there are more than that, we will hire a third-party hair stylist to ensure we have everyone ready in a timely manner.",
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
                                <div className="question">{item.question}</div>
                                <div className="answer">{item.answer}</div>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Comments;
