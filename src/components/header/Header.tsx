import styles from "./header.module.css"
import * as SiIcons from "react-icons/si"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {

    const [open, setOpen] = useState<boolean>(false)

    const onChange = () => {
        setOpen(!open)
    }

    return (
        <div className={styles.headerContainer}>
            {
                !open ? <div className={styles.menuItem}>
                    <FaIcons.FaBars onClick={onChange} />
                </div> :
                    <div className={styles.close}>
                        <AiIcons.AiOutlineClose onClick={onChange} />
                    </div>
            }
            <Link to="/" className={styles.heading}>
                <SiIcons.SiMicrosoftoffice />
                <h2>Job Center</h2>
            </Link>
            <div className={open ? `${styles.links}` : ` ${styles.closed} ${styles.links}`} onClick={onChange}>
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
