import { useEffect } from "react"

const HomePage = () => {
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return <h1> Home Page</h1>
}

export default HomePage