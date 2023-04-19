import styles from "./header.module.css"
import * as SiIcons from "react-icons/si"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {

    const [open, setOpen] = useState<boolean>(false)
    const [bars_class, setBarsClass] = useState(`${styles.menuBars} ${styles.menuUnclicked}`)

    const onChange = () => {
        if (!open) {
            setBarsClass(`${styles.menuBars} ${styles.menuClicked}`)
        }
        else {
            setBarsClass(`${styles.menuBars} ${styles.menuUnclicked}`)
        }
        setOpen(!open)
    }

    return (
        <div className={styles.mainContainer}>
            <nav className={styles.headerContainer}>
                <div className={styles.barsContainer} onClick={onChange}>
                    <div className={bars_class}></div>
                    <div className={bars_class}></div>
                    <div className={bars_class}></div>
                </div>
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
            </nav>
        </div>
    )
}

export default Header
