import { useParams, Link } from "react-router-dom"

const WelcomeComponent = () => {

    const { username } = useParams()

    return (
        <div>
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
        </div>
    )
}

export default WelcomeComponent