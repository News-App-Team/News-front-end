import React from 'react';
import "./About.css";
import Header from "./components/header/Header.js"
import Footer from "./components/footer/Footer.js"
// import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
// const image= require ("./Image");

export default function About(props) {


  return (
    <>
    <Header/>
    <div className='about'>
      {
      props.data.map(group => (
       
       

<Card className="card">
 
        <Card.Img variant="top" src="{group.image}" />
        <Card.Body>
        <Card.Text>
          {group.name}
          </Card.Text>
          <Card.Text>
          {group.Major}
          </Card.Text>
          <Card.Text>
          {group.Skills}
          </Card.Text>
          
        </Card.Body>
      </Card>
      ))}
     </div>
     <Footer/>
    </>

  );
}

