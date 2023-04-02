import { useEffect, useState } from "react"
import styles from "./job.module.css"
import { Link } from "react-router-dom"
import * as GoIcons from "react-icons/go"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"

export type JobType = {
    id: number
    title: string
    firm: string
    location: string
    desc: string
    contact: string
    field: string
    price: string
    max: number
    aplications: Names[]
}

type Names = {
    id: number
    name: string
    lastName: string
}

type JobsType = Array<JobType>

function JobList() {

    const [jobs, setJobs] = useState<JobsType>([])
    const [error, setError] = useState<null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch("http://localhost:8000/jobs")
            .then((response) => {
                if (!response.ok) {
                    throw Error('Sorry, we could not fetch the data!')
                }
                return response.json()
            })
            .then((json) => {
                setJobs(json)
                setError(null)
                setIsLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setIsLoading(false)
            })

    }, [])


    return (
        <div className={styles.mainContainer}>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {jobs && jobs.map((job) => {
                return (
                    <div className={styles.jobContainer} key={job.id}>
                        <Link to={`/find/${job.id}`} >
                            <div className={styles.firstSegment}>
                                <p>{job.price}€/h</p>
                                <span>{job.field}</span>
                            </div>
                            <h2>{job.title}</h2>
                            <div className={styles.secondSegment}>
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
                        </Link>
                    </div>
                )
            })
            }
        </div>
    )
}

export default JobList
