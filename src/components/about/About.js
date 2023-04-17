import React from 'react';
import About from "./About.css"
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
export default function About(props) {
  return (
    <>
    <Header/>
      {props.data.map(group => (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={group.image}
              alt={group.name}
            />
            <Carousel.Caption>
              <h3>{group.Major}</h3>
              <p>{group.Skills}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      ))}
      <Footer/>
    </>
  );
}

