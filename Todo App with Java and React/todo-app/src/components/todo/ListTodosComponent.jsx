import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"

const ListTodosComponent = () => {

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    //useEffect - tell React that your component needs to do something after render.
    useEffect(
        () => refreshTodos(), []
    )

    const refreshTodos = () => {
        retrieveAllTodosForUsernameApi(username)
            .then( 
                response => {
                    setTodos(response.data)
                }
            )
            .catch ((error) => console.log(error))

    }

    const deleteTodo = (id) => {
        deleteTodoApi(username, id)
            .then(
                //1: Display Message
                //2: Update Todos list
                () => {
                    setMessage(`Delete of todo with id: ${id} successful`)
                    refreshTodos()
                }
            )
            .catch(error => console.log(error))
    }
    
    const updateTodo = (id) => {
        navigate(`/todo/${id}`)
    }
    
    const addNewTodo = () => {
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Things you want To Do!</h1>

            { message && <div className="alert alert-success w-50 m-auto p-2">{message}</div> }
            
            <div>
                <div className="container my-3">
                    <button className="btn btn-outline-primary float-end" onClick={addNewTodo}>
                        Add New Todo
                    </button>
                </div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Description</th>
                            <th scope="col">Is Done?</th>
                            <th scope="col">Target Date</th>
                            <th scope="col" colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        {/* <td>{todo.id}</td> */}
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>
                                            <button className="btn btn-outline-warning mx-4" 
                                                onClick={() => updateTodo(todo.id)}>Update</button>
                                            <button className="btn btn-outline-danger" 
                                                onClick={() => deleteTodo(todo.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent