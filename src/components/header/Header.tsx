import "./header.scss"
import * as SiIcons from "react-icons/si"
import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {

    const [open, setOpen] = useState<boolean>(false)
    const [bars_class, setBarsClass] = useState("menu-bars unclicked")

    const onChange = () => {
        if (!open) {
            setBarsClass("menu-bars clicked")
        }
        else {
            setBarsClass("menu-bars unclicked")
        }
        setOpen(!open)
    }

    return (
        <nav className="header-container">
            <div className="bars-container" onClick={onChange}>
                <div className={bars_class}></div>
                <div className={bars_class}></div>
                <div className={bars_class}></div>
            </div>
            <Link to="/">
                <SiIcons.SiMicrosoftoffice />
                <h2>Job Center</h2>
            </Link>
            <div className={open ? "menu-links" : "menu-links closed"}>
                <li>
                    <Link to="find" className="find-link" onClick={onChange}>Find a Job</Link>
                </li>
                <li>
                    <Link to="post" className="post-link" onClick={onChange}>Post a Job</Link>
                </li>
            </div>
        </nav>
    )
}

export default Header
