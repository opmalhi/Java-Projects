import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import { retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService"
import { useAuth } from "./security/AuthContext"

const WelcomeComponent = () => {

    const [message, setMessage] = useState(null)

    const { username } = useParams()
    const authContext = useAuth()

    const callHelloWorldRestApi = () => {

        // retrieveHelloWorld()
        //     .then((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log("clean up"))

        // retrieveHelloWorldBean()
        //     .then((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log("clean up"))

        retrieveHelloWorldPathVariable("John", authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean up"))

    }

    const successfulResponse = (response) => {
        // console.log(response)
        
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