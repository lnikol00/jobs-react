import { useState } from "react"
import styles from "./create.module.css"
import { useNavigate } from "react-router-dom"

function Create() {

    const [price, setPrice] = useState<string>("")
    const [worker, setWorker] = useState<string>("")
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

        const job = { price, field, title, firm, location, desc, contact, aplications, worker }

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
                <h1>Post a job!</h1>
                <div className={styles.firstSegment}>
                    <div>
                        <label>Satnica: *</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Kategorija: *</label>
                        <select
                            value={field}
                            onChange={(e) => setField(e.target.value)}
                            required
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
                    <div>
                        <label>Br. slob. mjesta: *</label>
                        <input
                            value={worker}
                            onChange={(e) => setWorker(e.target.value)}
                            required
                        >
                        </input>
                    </div>
                </div>
                <div className={styles.secondSegment}>
                    <label>Naslov: *</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <label>Firma: *</label>
                    <input
                        value={firm}
                        onChange={(e) => setFirm(e.target.value)}
                        required
                    />
                    <label>Lokacija: *</label>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required

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
                </div>
                <button disabled={!price || !title || !firm || !location || !worker}>Dodaj posao</button>
            </form>
        </div>
    )
}

export default Create
