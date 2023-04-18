import SingleNews from '../singleNews/SingleNews';
import './AllNews.css';
export default function AllNews(props){
    return(
        <>
        <h2 id = "header">Breaking News</h2>
        <div id = "container">
            {props.data.map(news => {
                console.log(news);
                return (
                <div>
                    <SingleNews data = {news} addCommentProp = {props.addCommentProp}/></div>
                )
            })}
        </div>
        </>
    )
}