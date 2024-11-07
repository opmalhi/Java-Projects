import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService"

const WelcomeComponent = () => {

    const { username } = useParams()

    const [message, setMessage] = useState(null)

    const callHelloWorldRestApi = () => {

        // retrieveHelloWorld()
        //     .then((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log("clean up"))

        // retrieveHelloWorldBean()
        //     .then((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log("clean up"))

        retrieveHelloWorldPathVariable("XYZ")
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean up"))

    }

    const successfulResponse = (response) => {
        console.log(response)
        
        // setMessage(response.data) // for retrieveHelloWorld() api
        setMessage(response.data.message) // for retrieveHelloWorldBean() and retrieveHelloWorldPathVariable() api's
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