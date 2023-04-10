import * as GrIcons from "react-icons/gr"
import styles from "./job.module.css"
import { Link, useNavigate } from "react-router-dom"

function PopUp() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div className={styles.popupContainer}>
            <div className={styles.note}>
                <p>Sadly there are no more open jobs for this position!</p>
                <Link to="" onClick={goBack}>Return to job offers...</Link>
            </div>
        </div>
    )
}

export default PopUp