import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"

const WelcomeComponent = () => {

    const { username } = useParams()

    const [message, setMessage] = useState(null)

    const callHelloWorldRestApi = async () => {

        await axios.get('http://localhost:8080/hello-world-bean')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean up"))

    }

    const successfulResponse = (response) => {
        console.log(response)
        setMessage(response.data.message)
    }

    const errorResponse = (error) => {
        console.log(error)
    }

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
                <div className="text-info">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default WelcomeComponent