import SingleNews from '../singleNews/SingleNews';
import Carousel from "react-bootstrap/Carousel";
export default function AllNews(props){
    return (
      <>
        <h2 id="header">Breaking News</h2>
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
        <div id="container">
          {props.data.map((news) => {
            console.log(news);
            return (
              <SingleNews data={news} addCommentProp={props.addCommentProp} />
            );
          })}
        </div>
      </>
    );
}