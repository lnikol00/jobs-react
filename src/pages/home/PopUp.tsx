import styles from "./home.module.css"
import * as AiIcons from "react-icons/ai"
import ProgressBar from "./ProgressBar"

function PopUp() {
    return (
        <div className="popup-container">
            <div className="note">
                <AiIcons.AiOutlineCheck />
                <p>Thank you! You will be receving Job Offers on your email.</p>
            </div>
            <ProgressBar />
        </div>
    )
}

export default PopUp
