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
            comment: "Lorem ipsum dolor sit amet consec",
            name: "bakla",
        },
        {
            comment: "we love your make up, Everyone loved the look so much",
            name: "hkjlh",
        },
        {
            comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, hic",
            name: "dsadsa",
        },
        {
            comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, hic",
            name: "gadsfsdgaf",
        },
        {
            comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, hic",
            name: "gdfsa",
        },
        {
            comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, hic",
            name: "vishakh",
        },
    ];

    return (
        <div className="comment-box">
            <Carousel
                variant="light"
                activeIndex={index}
                onSelect={handleSelect}
            >
                {data.map((item, index) => {
                    return (
                        <Carousel.Item className="review-box">
                            <div className="comment">
                                {item.comment} {index}
                            </div>
                            <div className="name">{item.name}</div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Comments;
