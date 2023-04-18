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
            <Link to="/" className={styles.heading}>
                <SiIcons.SiMicrosoftoffice />
                <h2>Job Center</h2>
            </Link>
            <div className={open ? `${styles.links}` : ` ${styles.active} ${styles.links}`}>
                <li>
                    <Link to="find" className={styles.findLink} onClick={onChange}>Find a Job</Link>
                </li>
                <li>
                    <Link to="post" className={styles.postLink} onClick={onChange}>Post a Job</Link>
                </li>
            </div>
            {
                !open ? <div className={styles.menuItem}>
                    <FaIcons.FaBars onClick={onChange} />
                </div> :
                    <div className={styles.close}>
                        <AiIcons.AiOutlineClose onClick={onChange} />
                    </div>
            }
        </div>
    )
}

export default Header
