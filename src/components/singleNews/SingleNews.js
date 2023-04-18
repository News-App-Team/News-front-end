import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalNews from '../modalNews/ModalNews';
import { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./SingleNews.css";

export default function SingleNews(props){

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        
      <div id="div">
        {/* <Card id="card" style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: "400px" }}
            variant="top"
            src={props.data.image}
          />
          <Card.Body id="card-body">
            <p>{props.data.source}</p>
            <Card.Title>{props.data.title}</Card.Title>
            <div id="button">
              <Button
                id="add-fav-btn"
                variant="primary"
                onClick={handleShowModal}
              >
                Show Details
              </Button>
            </div>
          </Card.Body>
        </Card> */}
        <ModalNews
          data={props.data}
          handleClose={handleCloseModal}
          show={showModal}
          addCommentProp={props.addCommentProp}
        />

        <div>
          <MDBCard style={{ maxWidth: "900px" }}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage src={props.data.image} alt="..." fluid style={{ height: "100%" }} />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>{props.data.title}</MDBCardTitle>
                  <MDBCardText>{props.data.description}</MDBCardText>
                  <div id="button">
                    <Button
                      id="add-fav-btn"
                      variant="primary"
                      onClick={handleShowModal}
                    >
                      Show Details
                    </Button>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>
    ); 
}