import { Link, useParams } from "react-router-dom"
import "./job.scss"
import { useEffect, useState } from "react";
import { JobType } from "./JobList";
import * as BsIcons from "react-icons/bs"
import * as GoIcons from "react-icons/go"
import * as BiIcons from "react-icons/bi"

function JobDetails() {

    const params = useParams();

    const [job, setJob] = useState<JobType>()
    const [error, setError] = useState<null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)


    useEffect(() => {
        fetch(`http://localhost:8000/jobs/${params.id}?_embed=applications`)
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

    return (
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {job &&
                <div className="single-job-container">
                    <div className="heading">
                        <div className="segment-three">
                            <p>{job.price}€/h</p>
                            <span>{job.field}</span>
                        </div>
                        <h2>{job.title}</h2>
                        <div className="segment-four">
                            <div>
                                <BsIcons.BsBuildings />
                                <span>{job.firm}</span>
                            </div>
                            <div>
                                <GoIcons.GoLocation />
                                <span>{job.location}</span>
                            </div>
                            <div>
                                <BiIcons.BiUser />
                                <span>{job.max}</span>
                            </div>
                        </div>
                    </div>
                    <div className="desc">
                        <div>
                            <h2>Opis posla:</h2>
                            <p>{job.desc}</p>
                        </div>
                        <div>
                            <h2>Kontakt informacije:</h2>
                            <span>{job.contact}</span>
                        </div>
                        <div className="applications">
                            <h2>Popis prijavljenih osoba:</h2>
                            {job.applications && job.applications.map((person) => {
                                return (
                                    <div key={person.id}>
                                        <span>{person.id}.{person.name} {person.lastName}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <Link to="job-aplication"><button>Prijavi se za posao</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default JobDetails
