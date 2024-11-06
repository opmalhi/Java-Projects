import { useParams, Link } from "react-router-dom"
import axios from "axios"

const WelcomeComponent = () => {

    const { username } = useParams()

    const callHelloWorldRestApi = async () => {

        await axios.get('http://localhost:8080/hello-world')
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log("clean up"))

    }

    const successfulResponse = (response) => {
        console.log(response)
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
            </div>
        </div>
    )
}

export default WelcomeComponent