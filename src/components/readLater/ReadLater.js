import { useState, useEffect } from "react";
import {Button, Form, Card} from 'react-bootstrap';
import NavDropdown from "react-bootstrap/NavDropdown";
import './ReadLater.css';

export default function ReadLater() {

    const [readLaterNews, setReadLaterNews] = useState([]);
    const [dropDownChoice, setDropDownChoice] = useState(false);
    
    async function getReadLaterNews(){

        const url = `${process.env.REACT_APP_URL}/getDbNews`;
                                                                            
        const response = await fetch(url);
        const resData = await response.json();
        setReadLaterNews(resData);
    }

    async function handleDelete(id) {
        const url = `${process.env.REACT_APP_URL}/deleteNews/${id}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.status === 204) {
            getReadLaterNews();
        }
    }

    async function handleUpdate(event, id){
        event.preventDefault();
        const url = `${process.env.REACT_APP_URL}/updateNews/${id}`;
        const data = {comment : event.target.comment.value};
        await fetch(url, {method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data) });
        getReadLaterNews();
    }


    useEffect(() => { getReadLaterNews() }, []);

    return (<div id ="contain">
            <NavDropdown title="Channels" id="bdropdown">
                <NavDropdown.Item onClick={() => {setDropDownChoice("The Washington Post")}}>Washington News</NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{setDropDownChoice("Al Jazeera English")}}> Aljazeera News </NavDropdown.Item>
                <NavDropdown.Item onClick={()=>{setDropDownChoice("BBC News")}}>BBC News</NavDropdown.Item>
            </NavDropdown>     
            <div id="container1">
            { readLaterNews && readLaterNews.map(news => {
                return  ((dropDownChoice || "The Washington Post") === news.source) ?
                <Card id = 'card' style={{ width: '22%' }}>
                <Card.Body id="card-body">
                <Card.Img style={{height :"170px"}} variant="top" src = {news.image} />
                    <Card.Title>{news.title}</Card.Title>
                    <p>{news.source}</p>
                    <Card.Text>{news.description}</Card.Text>
                    <p>{news.comment}</p>
                    <Form onSubmit={(event) => handleUpdate(event, news.id)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control name="comment" as="textarea" rows={1} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => handleDelete(news.id)}>Delete</Button>
                        <Button type="submit" variant="primary">Update</Button>
                    </Form>
                </Card.Body>
                </Card>:null;
        
        })}</div>
        </div>
    )
} 
