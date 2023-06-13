import "./job.scss"
import { Link, useNavigate } from "react-router-dom"

function PopUp() {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div className="popUp-container">
            <div className="notes">
                <p>Sadly there are no more open jobs for this position!</p>
                <Link to="" onClick={goBack}>Return to job offers...</Link>
            </div>
        </div>
    )
}

export default PopUp