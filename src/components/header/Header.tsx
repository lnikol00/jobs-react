import styles from "./header.module.css"
import * as SiIcons from "react-icons/si"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className={styles.headerContainer}>
            <Link to="/" className={styles.heading}>
                <SiIcons.SiMicrosoftoffice />
                <h2>Job Center</h2>
            </Link>
            <div className={styles.links}>
                <li>
                    <Link to="find" className={styles.findLink}>Find a Job</Link>
                </li>
                <li>
                    <Link to="post" className={styles.postLink}>Post a Job</Link>
                </li>
            </div>
        </div>
    )
}

export default Header
