import { useState } from "react"
import styles from "./create.module.css"
import { useNavigate } from "react-router-dom"

function Create() {

    const [price, setPrice] = useState<string>("")
    const [field, setField] = useState<string>("Uredski poslovi")
    const [title, setTitle] = useState<string>("")
    const [firm, setFirm] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [aplications, setAplications] = useState([])

    const navigate = useNavigate()

    const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault()

        const job = { price, field, title, firm, location, desc, contact, aplications }

        fetch("http://localhost:8000/jobs", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body: JSON.stringify(job)
        }).then(() => {
            console.log("new job added")
        })
        navigate("/find")
    }

    return (
        <div className={styles.mainContainer}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Satnica:</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label>Kategorija:</label>
                    <select
                        value={field}
                        onChange={(e) => setField(e.target.value)}
                    >
                        <option value="Uredski poslovi">Uredski poslovi</option>
                        <option value="Ugostiteljstvo i turizam">Ugostiteljstvo i turizam</option>
                        <option value="Fizički poslovi">Fizički poslovi</option>
                        <option value="Informatički poslovi">Informatički poslovi</option>
                        <option value="Intelektualni poslovi">Intelektualni poslovi</option>
                        <option value="Prodaja">Prodaja</option>
                        <option value="Promidžba">Promidžba</option>
                    </select>
                </div>
                <label>Naslov:</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Firma:</label>
                <input
                    value={firm}
                    onChange={(e) => setFirm(e.target.value)}
                />
                <label>Lokacija:</label>
                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}

                />
                <label>Opis posla:</label>
                <textarea
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}

                />
                <label>Kontakt informacije:</label>
                <input
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
                <button>Dodaj posao</button>
            </form>
        </div>
    )
}

export default Create
