import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Error = () => {


    const navigate = useNavigate()
    const [seconds, setSeconds] = useState(5)

    useEffect(()=>{
        const timer = setInterval(()=> {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 1) {
                    clearInterval(timer)
                    navigate('/')
                    return 0
                }
                return prevSeconds-1
            })
        }, 1000)

        return () => clearInterval(timer)

    }, [navigate])

    return (
        <div>
            <div>Page Not Found</div>
            <div>Redirecting you home in {seconds} seconds...</div>
        </div>
    )
    }

 export default Error
