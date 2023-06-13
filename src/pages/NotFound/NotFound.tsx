import { Link } from 'react-router-dom'
import "./notfound.scss"
import * as HiIcons from "react-icons/hi"

function NotFound() {
    return (
        <div className="found-container">
            <HiIcons.HiOutlineEmojiSad />
            <h2>404</h2>
            <p className="not-found">Page not found</p>
            <span>The page that you are looking for doesnt exist or some other error occured.</span>
            <p><Link to="/">Return back to the home page...</Link></p>
        </div>
    )
}

export default NotFound
