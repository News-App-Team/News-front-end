import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import AllNews from "../allNews/AllNews";
import "./Home.css";
import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Home() {
  const url = process.env.REACT_APP_URL;

  const [readLater, setReadLater] = useState([]);

  async function fetchTrending() {
    const response = await fetch(`${url}/getNews`);
    const trendingData = await response.json();
    setReadLater(trendingData);
    console.log(readLater);
  }

  useEffect(() => {
    fetchTrending();
  }, []);

  function addCommentProp(comment, id) {
    for (const movie of readLater) {
      if (movie.id === id) {
        movie.comment = comment;
      }
    }
  }

  return (
    <>
      <AllNews data={readLater} addCommentProp={addCommentProp} />
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 carouselImg"
            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1380&t=st=1681756510~exp=1681757110~hmac=65cadace936c245a441e2afe6b7bfbd405650b3783583a469b52831b52f52957"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 carouselImg"
            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1380&t=st=1681756510~exp=1681757110~hmac=65cadace936c245a441e2afe6b7bfbd405650b3783583a469b52831b52f52957"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carouselImg"
            src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1380&t=st=1681756510~exp=1681757110~hmac=65cadace936c245a441e2afe6b7bfbd405650b3783583a469b52831b52f52957"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <MDBCard style={{ maxWidth: "540px" }}>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <MDBCardImage
              src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg?w=1380&t=st=1681756510~exp=1681757110~hmac=65cadace936c245a441e2afe6b7bfbd405650b3783583a469b52831b52f52957"
              alt="..."
              fluid
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBCardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
}
