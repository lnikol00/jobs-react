import { useEffect, useRef, useState } from "react"
import styles from "./job.module.css"
import { useNavigate, useParams } from "react-router-dom";

const NAME_REGEX = /^[A-Z]+[a-zA-Z]*$/;
// const PHONE_REGEX = /^[0-9]{10}$/;
const PHONE_REGEX = /^[09][0-9]*$/;

function Aply() {

    const params = useParams();

    const [name, setName] = useState<string>("")
    const [validName, setValidName] = useState<boolean>(false)
    const [nameFocus, setNameFocus] = useState<boolean>(false)

    const [lastName, setLastName] = useState<string>("")
    const [validLastName, setValidLastName] = useState<boolean>(false)
    const [lastNameFocus, setLastNameFocus] = useState<boolean>(false)

    const [phone, setPhone] = useState<string>("")
    const [validPhone, setValidPhone] = useState<boolean>(false)
    const [phoneFocus, setPhoneFocus] = useState<boolean>(false)

    const nameRef = useRef<HTMLInputElement | null>(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (nameRef.current)
            nameRef.current.focus();
    }, [])

    useEffect(() => {
        const result = NAME_REGEX.test(name);
        setValidName(result)
    }, [name])

    useEffect(() => {
        const result = NAME_REGEX.test(lastName);
        setValidLastName(result)
    }, [lastName])

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result)
    }, [phone])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const person = { name, lastName, phone }

        fetch(`http://localhost:8000/jobs/aplications`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(person)
        }).then(() => {
            console.log("new applicant added")
        })
        navigate(-1)

    }

    return (
        <div className={styles.aplyContainer}>
            <form onSubmit={handleSubmit}>
                <span>Broj mobitela je povjerljiva informacija i neće biti prikazan drugim korisnicima!</span>
                <label>Ime:</label>
                <input
                    type="text"
                    value={name}
                    ref={nameRef}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="namenote"
                    onFocus={() => setNameFocus(true)}
                    onBlur={() => setNameFocus(false)}
                    required
                />
                <p id="namenote" className={nameFocus && name && !validName ? `${styles.errmsg}` : `${styles.offscreen}`}>Not a valid name!</p>
                <label>Prezime:</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    aria-invalid={validLastName ? "false" : "true"}
                    aria-describedby="lastnamenote"
                    onFocus={() => setLastNameFocus(true)}
                    onBlur={() => setLastNameFocus(false)}
                    required
                />
                <p id="lastnamenote" className={lastNameFocus && lastName && !validLastName ? `${styles.errmsg}` : `${styles.offscreen}`}>Not a valid last name!</p>
                <label>Broj mobitela:</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={validPhone ? "false" : "true"}
                    aria-describedby="phonenote"
                    onFocus={() => setPhoneFocus(true)}
                    onBlur={() => setPhoneFocus(false)}
                    required
                />
                <p id="phonenote" className={phoneFocus && phone && !validPhone ? `${styles.errmsg}` : `${styles.offscreen}`}>Not a valid phone number!</p>
                <button disabled={!validName || !validLastName || !validPhone ? true : false}>Prijavi se</button>
            </form>
        </div>
    )
}

export default Aply
