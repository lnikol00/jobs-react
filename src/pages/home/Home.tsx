import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom";
import "./home.scss"
import image from "./img/slika.jpg"
import * as FaIcons from "react-icons/fa"
import PopUp from "./PopUp";

function Home() {
    const form = useRef<HTMLFormElement>(null);
    const [email, setEmail] = useState<string>("")
    const [showPopup, setShowPopup] = useState<boolean>(false)

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`mail: ${email}`)
        form.current?.reset();
        setShowPopup(true)
        setEmail("")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(false)
        }, 5000)

        return () => { clearTimeout(timer) }
    }, [showPopup])

    let popup = null;
    if (showPopup) {
        popup = <PopUp />
    }

    return (
        <div className="home-container">
            <div className="text">
                <h1>Find the best student jobs for you all in one place!</h1>
                <span>Looking to make some extra cash?
                    Best student jobs are waitigng for you! <br />
                    Just fill in the form and wait for your contanct from job suplier.
                </span>
                <div className="popup">
                    {popup}
                </div>
                <form ref={form} onSubmit={handelSubmit}>
                    <input
                        type="email"
                        value={email}
                        placeholder="Your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button>Send me Job Notifications!</button>
                    <span>Or <Link to="find"><FaIcons.FaHandPointRight /> go take a look at offers</Link> yourself!</span>
                </form>
            </div>
            <div className="image">
                <img alt="slika" src={image} />
            </div>
        </div>
    )
}

export default Home
