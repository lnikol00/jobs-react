import { Link } from "react-router-dom"
import "./footer.scss"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import Slider from "./Slider"

function Footer() {
    return (
        <div className="footer-container">
            <div className="grid-container">
                <div className="qoute-container">
                    <h3>Famous Qoutes</h3>
                    <Slider />
                </div>
                <div className="links-container">
                    <h3>Keep connected</h3>
                    <ul className="links">
                        <li>
                            <div className="icons facebook">
                                <FaIcons.FaFacebookF />
                            </div>
                            <Link to="">Like us on Facebook</Link>
                        </li>
                        <li>
                            <div className="icons twitter">
                                <FaIcons.FaTwitter />
                            </div>
                            <Link to="">Follow us on Twitter</Link>
                        </li>
                        <li>
                            <div className="icons google-plus">
                                <FaIcons.FaGooglePlusG />
                            </div>
                            <Link to="">Add us on Google Plus</Link>
                        </li>
                        <li>
                            <div className="icons dribbble">
                                <FaIcons.FaDribbble />
                            </div>
                            <Link to="">Follow us on Dribbble</Link>
                        </li>
                        <li>
                            <div className="icons pinterest">
                                <FaIcons.FaPinterestP />
                            </div>
                            <Link to="">Like us on Facebook</Link>
                        </li>
                    </ul>
                </div>
                <div className="info-container">
                    <h3>Contact information</h3>
                    <ul className="data">
                        <li>
                            <div>
                                <FaIcons.FaHome />
                            </div>
                            <p>Job Center<br />Lorem Ispum Dolor <br /> Split, Poljička65</p>
                        </li>
                        <li>
                            <div>
                                <FaIcons.FaMobileAlt />
                            </div>
                            <p>021678948</p>
                        </li>
                        <li>
                            <div>
                                <AiIcons.AiOutlineMail />
                            </div>
                            <p>joboffers@hotmail.com</p>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="end-container">
                <div className="rights-container">
                    ©Job Center. All Rights Reserverd
                </div>
                <div className="company-container">
                    <div>
                        Company Information
                    </div>
                    <div>
                        Privacy Policy
                    </div>
                    <div>
                        Terms & Conditions
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
