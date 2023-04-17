import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./About.css";
import teamInfo from "./teamInfo.json"
const AboutUs = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Show the first card after a delay
        setTimeout(() => setShowContent(true), 1000);
    }, []);

    const handleCardClick = (index) => {
        if (index === currentIndex) return;

        const isNext = index > currentIndex;
        const directionClass = isNext ? "animate-out" : "animate-in";

        setCurrentIndex(index);
        setShowContent(false);
        const timeoutId = setTimeout(() => {
            setShowContent(true);
        }, 500);

        document
            .querySelectorAll(".card.animated")
            .forEach((card) => card.classList.remove("animated", directionClass));
        const card = document.querySelector(`.card[data-index="${index}"]`);
        card.classList.add("animated", directionClass);

        return () => clearTimeout(timeoutId);
    };

    return (
        <>
        
            <div className="container">
                <div className="mission_statement">
                    <h1 className="head">About Us</h1>
                    <p>{teamInfo.missionStatement}</p>
                </div>
                <div className="card-container">
                    <h1>Our Team</h1>
                    {teamInfo.teamMembers.map((member, index) => (
                        <Card 
                            key={index}
                            bg={index % 2 === 0 ? "primary" : "success"}
                            text="white"
                            className={`mb-4 card ${showContent && currentIndex === index ? "show-content" : ""
                                }`}
                            data-index={index}
                            onClick={() => handleCardClick(index)}
                        >      <div className="card-head">
                                <Card.Img class="img" variant="top" src={member.image} />
                                <Card.Title><div className="member">{member.name}</div></Card.Title>
                                </div>
                                {showContent && currentIndex === index && (
                            <div className="card-content">
                                <Card.Body>

                                    <Card.Text>{member.bio}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className=""><div className="Skills">Skills:</div>{member.skills}</small>
                                </Card.Footer>
                            </div>
                            )}
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutUs;
