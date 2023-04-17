import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalNews from '../modalNews/ModalNews';
import { useState } from 'react';

export default function SingleNews(props){

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div id="div">
        <Card id = 'card' style = {{ width: '18rem' }}>
        <Card.Img style={{height :"400px"}} variant="top" src = {props.data.image} />
        <Card.Body id="card-body">
            <p>{props.data.source}</p>
            <Card.Title>{props.data.title}</Card.Title>
            <div id = 'button'>
            <Button id="add-fav-btn" variant="primary" onClick={handleShowModal}>Show Details</Button>
            </div>
        </Card.Body>
        </Card>
        <ModalNews data = {props.data} handleClose = {handleCloseModal} show = {showModal} addCommentProp = {props.addCommentProp}/>
        </div>
    ) 
}