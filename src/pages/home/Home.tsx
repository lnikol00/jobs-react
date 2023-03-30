import { useRef, useState } from "react"
import { Link } from "react-router-dom";
import styles from "./home.module.css"
import image from "./img/slika.jpg"
import * as FaIcons from "react-icons/fa"

function Home() {
    const ref = useRef<null>(null);
    const [email, setEmail] = useState<string>("")

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`mail: ${email}`)
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.text}>
                <h1>Find the best student jobs for you all in one place!</h1>
                <span>Looking to make some extra cash?
                    Best student jobs are waitigng for you! <br />
                    Just fill in the form and wait for your contanct from job suplier.
                </span>
                <form ref={ref} onSubmit={handelSubmit}>
                    <input
                        value={email}
                        placeholder="Your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button>Send me Job Notifications!</button>
                    <span>Or <Link to="find" className={styles.findLink}><FaIcons.FaHandPointRight /> go take a look at offers</Link> yourself!</span>
                </form>
            </div>
            <div className={styles.image}>
                <img alt="picture" src={image} />
            </div>
        </div>
    )
}

export default Home
