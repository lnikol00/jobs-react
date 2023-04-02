import { Link, useParams } from "react-router-dom"
import styles from "./job.module.css"
import { useEffect, useState } from "react";
import { JobType } from "./JobList";
import * as BsIcons from "react-icons/bs"
import * as GoIcons from "react-icons/go"

function JobDetails() {

    const params = useParams();

    const [job, setJob] = useState<JobType>()
    const [error, setError] = useState<null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [disable, setDisable] = useState<boolean>(false)

    useEffect(() => {
        fetch(`http://localhost:8000/jobs/${params.id}`)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Sorry, we could not fetch the data!')
                }
                return response.json()
            })
            .then((json) => {
                setJob(json)
                setError(null)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })

    }, [params.id])

    useEffect(() => {
        if (job?.aplications.length === job?.max) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }, [job?.aplications.length, job?.max])

    return (
        <div className={styles.mainContainer}>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {job &&
                <div className={styles.singleJob}>
                    <div className={styles.heading}>
                        <div className={styles.segmentOne}>
                            <p>{job.price}€/h</p>
                            <span>{job.field}</span>
                        </div>
                        <h2>{job.title}</h2>
                        <div className={styles.segmenTwo}>
                            <div>
                                <BsIcons.BsBuildings />
                                <span>{job.firm}</span>
                            </div>
                            <div>
                                <GoIcons.GoLocation />
                                <span>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        <div>
                            <h2>Opis posla:</h2>
                            <p>{job.desc}</p>
                        </div>
                        <div>
                            <h2>Kontakt informacije:</h2>
                            <span>{job.contact}</span>
                        </div>
                        <div className={styles.aplications}>
                            <h2>Popis prijavljenih osoba:</h2>
                            {job.aplications.map((person) => {
                                return (
                                    <div key={person.id}>
                                        <span>{person.id}.{person.name} {person.lastName}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <Link to="job-aplication" className={styles.button}><button disabled={disable}>Prijavi se za posao</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default JobDetails
