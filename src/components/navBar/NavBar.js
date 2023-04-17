import { Link } from "react-router-dom";
import './NavBar.css';
export default function NavBar () {
    return (
        <>
        <p>World Times</p>
        <nav>
            <ul>
                <li><Link className="link" to = '/'>Home</Link></li>
                <li><Link className="link" to = '/aljazeera'>Aljazeera</Link></li>
                <li><Link className="link" to = '/bbcnews'>BbcNews</Link></li>
                <li><Link className="link" to = '/readLater'>Read Later</Link></li>
            </ul>
        </nav>
        </>
    )
}