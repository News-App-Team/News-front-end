import SingleNews from "../singleNews/SingleNews";
import Carousel from "react-bootstrap/Carousel";
import "./AllNews.css";
export default function AllNews(props) {
  return (
    <>
      <Carousel>
        {/* console.log('PROPS', props.data); */}
        {props.data.slice(0, 3).map((news, index) => {
          console.log(news);
          return (
            <Carousel.Item interval={1000} key={index}>
              <img
                style={{ objectFit: "cover" }}
                className="d-block w-100 carouselImg"
                src={news.image}
                alt={news.title}
              />
              <Carousel.Caption>
                <a href={news.url} className="newsURL" >  
                <h3>{news.title}</h3>
                </a>
                <p>{news.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div id="container">
        {props.data.slice(3, props.data.length).map((news, index) => {
          return (
            <SingleNews
              data={news}
              addCommentProp={props.addCommentProp}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
}
