import { useState, useEffect } from "react";
import {Button, Form, Card} from 'react-bootstrap';
import './ReadLater.css';

export default function ReadLater (){
    
    const [readLaterNews, setReadLaterNews] = useState([]);
    
    async function getReadLaterNews(){

        const url = `${process.env.REACT_APP_URL}/getDbNews`;
                                                                            
        const response = await fetch(url);
        const resData = await response.json();
        setReadLaterNews(resData);
    }

    async function handleDelete(id){
        const url = `${process.env.REACT_APP_URL}/deleteNews/${id}`;
        const response = await fetch(url, {method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }});

       if(response.status === 204) { 
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


    useEffect(() => {getReadLaterNews()}, []);

    return (
        <div id="container">
        { readLaterNews && readLaterNews.map(news => {
            return (
                <Card id = 'card' style={{ width: '18rem' }}>
                <Card.Body id="card-body">
                <Card.Img style={{height :"400px"}} variant="top" src = {news.image} />
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Text>{news.description}</Card.Text>
                    <p>{news.comment}</p>
                    <Form onSubmit={(event) => handleUpdate(event, news.id)}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control name="comment" as="textarea" rows={1} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => handleDelete(news.id)}>Delete</Button>
                        <Button type="submit" variant="primary">Update</Button>
                    </Form>
                    <div id = 'button'>
                    </div>
                </Card.Body>
                </Card>
            )
        })}
        </div>
    )
} 
