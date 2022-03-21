import React from "react";
import { Button } from "react-bootstrap";
import Selfi from "../assets/photos/portrait.jpeg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="image-box">
                <img className="selfi" src={Selfi} alt="Self portrait" />
            </div>
            <div className="intro-words">
                <p className="intro-heading">
                    Hi, my name is blah blah, I am blah blah blahhh.
                </p>
                <p className="intro-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi placeat expedita repellendus aliquid architecto
                    labore, possimus amet maxime praesentium consequuntur ad
                    molestiae ipsum commodi asperiores odio in alias aspernatur
                    minima? Quasi nulla tempore necessitatibus similique
                    provident culpa ipsa explicabo dolor, perferendis ut? Unde,
                    et! A beatae, ea aut, provident libero expedita voluptatem
                    repellendus vero enim at inventore odio eligendi similique
                    sint magnam ut nesciunt. perferendis. Harum, qui? Minima,
                    illo cupiditate.
                </p>
                <Button className="button-more-about-me">
                    <p className="button-more-about-me">More About Me</p>
                </Button>
            </div>
        </div>
    );
};

export default Intro;
