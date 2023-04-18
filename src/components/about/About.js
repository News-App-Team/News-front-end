import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./About.css";
import teamInfo from "./teamInfo.json";
const AboutUs = () => {
  const primaryColor = {
    background:
      "linear-gradient(to top right, #ff0000, #ff3333 25%, #ff6666 50%, #ff9999 75%, #ffffff)",
  };
  const secondaryColor = {
    background:
      "linear-gradient(to top right, #000000, #333333 25%, #666666 50%, #999999 75%, #ffffff)",
  };
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
    }, 100);
    document
      .querySelectorAll(".card.animated")
      .forEach((card) => card?.classList.remove("animated", directionClass));
    const card = document.querySelector(`.card[data-index="${index}"]`);
    card?.classList.add("animated", directionClass);
    return () => clearTimeout(timeoutId);
  };
  return (
    <div className="container">
      <div className="mission_statement">
        <h1 className="head">About Us</h1>
        <p>{teamInfo.missionStatement}</p>
      </div>
      <div className="card-container">
        <h1 className="teamHead">Our Team</h1>
        {teamInfo.teamMembers.map((member, index) => (
          <Card
            key={index}
            className={`mb-4 customCard ${
              showContent && currentIndex === index ? "show-content" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            <div container className="card-body-container">
              <Card.Img className="img" src={member.image} />
              <div className="card-body">
                <Card.Title>
                  <div className="member">{member.name}</div>
                </Card.Title>
                {showContent && currentIndex === index && (
                  <div className="card-content">
                    <Card.Body>
                      <Card.Text>{member.bio}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="">
                        <div className="Skills">Skills:</div>
                        {member.skills}
                      </small>
                    </Card.Footer>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default AboutUs;
