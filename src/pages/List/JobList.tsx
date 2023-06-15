import { useEffect, useState } from "react"
import "./job.scss"
import { Link } from "react-router-dom"
import * as GoIcons from "react-icons/go"
import * as BsIcons from "react-icons/bs"
import * as BiIcons from "react-icons/bi"
import * as GrIcons from "react-icons/gr"
import * as AiIcons from "react-icons/ai"

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
    applications: Names[]
}

type Names = {
    jobId: number
    id: number
    name: string
    lastName: string
}

type JobsType = Array<JobType>

function JobList() {

    const [jobs, setJobs] = useState<JobsType>([])
    const [error, setError] = useState<null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [search, setSearch] = useState<string>("")
    const [filter, setFilter] = useState<string>("Svi poslovi")

    useEffect(() => {
        fetch("http://localhost:8000/jobs/")
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
        <div className="container">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div className="filter-container">
                <div className="search">
                    <AiIcons.AiOutlineSearch />
                    <input onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="filter">
                    <GrIcons.GrFilter />
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="Svi poslovi">Svi poslovi</option>
                        <option value="Uredski poslovi">Uredski poslovi</option>
                        <option value="Ugostiteljstvo i turizam">Ugostiteljstvo i turizam</option>
                        <option value="Fizički poslovi">Fizički poslovi</option>
                        <option value="Informatički poslovi">Informatički poslovi</option>
                        <option value="Intelektualni poslovi">Intelektualni poslovi</option>
                        <option value="Prodaja">Prodaja</option>
                        <option value="Promidžba">Promidžba</option>
                    </select>
                </div>
            </div>
            {
                jobs && jobs.filter((job) => {
                    if (search === "") {
                        return job;
                    }
                    else if (job.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                        return job;
                    }
                }).filter((job) => {
                    if (filter === "Svi poslovi") {
                        return job;
                    }
                    else if (job.field.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                        return job;
                    }
                }).map((job) => {
                    return (
                        <div className="job-container" key={job.id}>
                            <Link to={`/find/${job.id}`} >
                                <div className="segment-one">
                                    <p>{job.price}€/h</p>
                                    <span>{job.field}</span>
                                </div>
                                <h2>{job.title}</h2>
                                <div className="segment-two">
                                    <div>
                                        <BsIcons.BsBuildings />
                                        <span>{job.firm}</span>
                                    </div>
                                    <div>
                                        <GoIcons.GoLocation />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default JobList
