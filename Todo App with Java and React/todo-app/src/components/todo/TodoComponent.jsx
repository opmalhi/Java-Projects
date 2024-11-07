import { useParams } from "react-router-dom"
import { retrieveTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

const TodoComponent = () => {

    const [description, setDescription] = useState('')

    const { id } = useParams()

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        () => retrieveTodo, [id]
    )

    const retrieveTodo = () => {
        retrieveTodoApi(username, id)
            .then(
                response => {
                    setDescription(response.data.description)
                }
            )
            .catch((error) => console.log(error))
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                description: {description}
            </div>
        </div>
    )
}

export default TodoComponent