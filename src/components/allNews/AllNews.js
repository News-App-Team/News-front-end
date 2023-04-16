import SingleNews from '../singleNews/SingleNews';
export default function AllNews(props){
    return(
        <>
        <h2 id = "header">Breaking News</h2>
        <div id = "container">
            {props.data.map(news => {
                console.log(news);
                return <SingleNews data = {news} addCommentProp = {props.addCommentProp}/>
            })}
        </div>
        </>
    )
}