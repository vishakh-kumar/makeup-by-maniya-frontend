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
                    Hi! My name is Maniya Imam. I am a Make-Up Artist Based in
                    Houston.
                </p>
                <p className="intro-desc">
                    I have been doing makeup since I was 12 years old due to a
                    waxing incident that burnt my upper lip. I started using
                    full coverage foundations to cover up the scar and
                    eventually started stealing my mom’s and sisters’ makeup and
                    started adding blush and eyeshadow to my makeup routine.
                    Ever since then I found a passion for makeup and using it as
                    a tool to help myself and others feel more confident with
                    the way they look. I also realized I had a passion for
                    special effects makeup, as I was working for the theatre
                    department at my school and creating fun and freaky looks
                    for the plays we produced. During and after high school I
                    began working in the Dillards cosmetics department where I
                    really learned to to create looks on different skin types
                    and tones. Sometimes I would do 5+ makeovers a day and
                    really had mastered the art of enhancing one’s natural
                    features. I then moved on to working at Sephora where they
                    train you to not only perfect your artistry but to do it in
                    a timely manner with the best techniques. I now am working
                    for YSL and Giorgio Armani where I learn everyday how to
                    perfect the complexion and create a flawless base. My mantra
                    is that makeup is a tool to really help your natural
                    features stand out and keep you looking like yourself with a
                    little pop! I love to help women feel empowered and help
                    them feel beautiful! I have a strong passion for makeup and
                    i guarantee to all my clients that they have chosen someone
                    who not only loves the art of makeup but also prides herself
                    in great customer service and making sure my clients are
                    100% happy when they leave my chair.
                </p>
                <Button className="button-more-about-me">
                    <p className="button-more-about-me">More About Me</p>
                </Button>
            </div>
        </div>
    );
};

export default Intro;
