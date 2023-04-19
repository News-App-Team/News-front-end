
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import ModalNews from "../modalNews/ModalNews";
import { useState } from "react";
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

export default function SingleNews(props) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div id="containerDiv">
      <ModalNews data={props.data} handleClose={handleCloseModal} show={showModal} addCommentProp={props.addCommentProp} />

      <div>
        <MDBCard style={{ maxWidth: "900px" }}>
          <MDBRow className="g-0">
            <MDBCol md="4">
              <MDBCardImage
                src={props.data.image}
                alt="..."
                fluid
                style={{ height: "100%" }}
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <div id="tit-src">
                <MDBCardTitle><a href={props.data.url} className="title-link" >{props.data.title}</a></MDBCardTitle>
                <MDBCardText>{props.data.source}</MDBCardText>
                </div>
                <MDBCardText>{props.data.description}</MDBCardText>
                <div id="auth-date">
                <MDBCardText>{`Author: ${props.data.author}`}</MDBCardText>
                <MDBCardText>{`Publish Date: ${props.data.publishedAt.replace((/[TZ]/ig)," ")}`}</MDBCardText>
                </div>
                <br/>
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
