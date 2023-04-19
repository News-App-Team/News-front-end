import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ReadLater.css";
export default function ReadLater() {
  const [readLaterNews, setReadLaterNews] = useState([]);
  const updatedComment = useRef();
  async function getReadLaterNews() {
    const url = `${process.env.REACT_APP_URL}/getDbNews`;
    const response = await fetch(url);
    const resData = await response.json();
    setReadLaterNews(resData);
  }
  async function handleDelete(id) {
    const url = `${process.env.REACT_APP_URL}/deleteNews/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 204) {
      getReadLaterNews();
    }
  }
  async function handleUpdate(id) {
    const url = `${process.env.REACT_APP_URL}/updateNews/${id}`;
    const data = { comment: updatedComment.current.value };
    console.log(updatedComment.current.value);
    console.log(id);
    await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    getReadLaterNews();
  }
  useEffect(() => {
    getReadLaterNews();
  }, []);
  return (
    <div id="containerReadLater" >
      {readLaterNews &&
        readLaterNews.map((news) => {
          return (
            <Card id="Card" style={{ width: "20rem" }}>
              <Card.Body id="Card-body">
                <Card.Img
                  style={{ height: "250px" }}
                  variant="top"
                  src={news.image}
                />
                <Card.Title id="Card-title"> <a href={news.url} className="cardTitleURL" >{news.title}</a> </Card.Title>
                <Card.Text className="Card-text">{news.description}</Card.Text>
                <p>{news.comment}</p>
                <input
                  ref={updatedComment}
                  type="text"
                  placeholder="Add your Note here"
                />
                <div id="Button">
                  <Button
                    className="My-button"
                    variant="danger"
                    onClick={() => handleDelete(news.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdate(news.id)}
                  >
                    Update
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
}
