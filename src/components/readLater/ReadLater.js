import { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./ReadLater.css";
import data from "../../data/staticData";
export default function ReadLater() {
  let breakingNews = data.breakingNews;
  const [showComment, setShowComment] = useState(false);
  const handleCommentBtn = () => setShowComment(!showComment);
  function commentBtnState() {
    return showComment ? "Save changes" : null;
  }
  const [readLaterNews, setReadLaterNews] = useState([]);
  const [dropDownChoice, setDropDownChoice] = useState(false);
  const [showSingleInput, setShowSingleInput] = useState([]);
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
  async function handleUpdate(event, id) {
    handleCommentBtn();
    event.preventDefault();
    const url = `${process.env.REACT_APP_URL}/updateNews/${id}`;
    const data = { comment: event.target.comment.value };
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
    <div id="containerReadLater">
      <NavDropdown title="Resources" className="resourses" id="drop-select">
        <NavDropdown.Item
          onClick={() => {
            setDropDownChoice("The Washington Post");
          }}
        >
          Washington News
        </NavDropdown.Item>
        <NavDropdown.Item
          onClick={() => {
            setDropDownChoice("Al Jazeera English");
          }}
        >
          {" "}
          Aljazeera News{" "}
        </NavDropdown.Item>
        <NavDropdown.Item
          onClick={() => {
            setDropDownChoice("BBC News");
          }}
        >
          BBC News
        </NavDropdown.Item>
      </NavDropdown>
      <div className="readLaterSection">
        {readLaterNews &&
          readLaterNews.map((news) => {
            return dropDownChoice === news.source ? (
              <Card id="Card">
                <Card.Body id="Card-body">
                  <div id="cardContent">
                    {" "}
                    <Card.Img
                      style={{ height: "250px" }}
                      variant="top"
                      src={news.image}
                    />
                    <Card.Title id="Card-title">
                      {" "}
                      <a
                        href={news.url}
                        className="cardTitleURL"
                        target="_blank"
                      >
                        {" "}
                        {news.title}{" "}
                      </a>{" "}
                    </Card.Title>
                    <Card.Text className="Card-text">
                      {" "}
                      {news.description}{" "}
                    </Card.Text>
                    <p>{news.comment}</p>
                    <p>{news.source}</p>
                  </div>
                  <div id="cardFooter"></div>
                  <Form onSubmit={(event) => handleUpdate(event, news.id)}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      {showComment && showSingleInput === news.id ? (
                        <Form.Control name="comment" as="textarea" rows={1} />
                      ) : null}
                    </Form.Group>
                    <div className="bottunDesign">
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(news.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                        onClick={() => {
                          setShowSingleInput(news.id);
                        }}
                      >
                        {showComment && showSingleInput === news.id
                          ? commentBtnState()
                          : "Update"}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            ) : null;
          })}
        {readLaterNews &&
          readLaterNews.map((news) => {
            return dropDownChoice === false ? (
              <Card id="Card">
                <Card.Body id="Card-body">
                  <div id="cardContent">
                    {" "}
                    <Card.Img
                      style={{ height: "250px" }}
                      variant="top"
                      src={news.image}
                    />
                    <Card.Title id="Card-title">
                      {" "}
                      <a
                        href={news.url}
                        className="cardTitleURL"
                        target="_blank"
                      >
                        {" "}
                        {news.title}{" "}
                      </a>{" "}
                    </Card.Title>
                    <Card.Text className="Card-text">
                      {" "}
                      {news.description}{" "}
                    </Card.Text>
                    <p>{news.source}</p>
                    <p>{`Your Comment: ${news.comment}`}</p>
                  </div>
                  <div id="cardFooter"></div>
                  <Form onSubmit={(event) => handleUpdate(event, news.id)}>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      {showComment && showSingleInput === news.id ? (
                        <Form.Control name="comment" as="textarea" rows={1} />
                      ) : null}
                    </Form.Group>
                    <div className="bottunDesign">
                      <Button
                        className="buttonWidth"
                        variant="danger"
                        onClick={() => handleDelete(news.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        className="buttonWidth"
                        id="add-fav-btn"
                        type="submit"
                        variant="primary"
                        onClick={() => {
                          setShowSingleInput(news.id);
                        }}
                      >
                        {showComment && showSingleInput === news.id
                          ? commentBtnState()
                          : "Update"}
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            ) : null;
          })}
      </div>
      <div className="breakingNewsSection">
        <h3 className="breakingNewsTitle">!!! BREAKING NEWS !!!</h3>
        <div className="breakingNewsSectionBody">
          {breakingNews?.map((news) => (
            <div className="singleBreakingNews">
              <img
                style={{ width: "100px", height: "auto" }}
                className="d-block w-100 carouselImg mb-2"
                src={news.img}
                alt={news.title}
              />
              <a href={news.link} className="newsURLblack" target="_blank">
                {" "}
                {news.title}{" "}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
