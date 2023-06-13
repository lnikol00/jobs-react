import { useEffect, useState } from "react"
import styles from "./home.module.css"

function ProgressBar() {
    const [filled, setFilled] = useState<number>(0)

    useEffect(() => {
        setTimeout(() => setFilled(prev => prev += 2), 86)
    }, [filled])

    return (
        <div className="progressbar-container">
            <div style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "green",
                transition: "width 0.5s"
            }}>
            </div>
        </div>
    )
}

export default ProgressBar