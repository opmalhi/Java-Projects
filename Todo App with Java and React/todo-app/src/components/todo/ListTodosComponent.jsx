import { useEffect, useState } from "react"
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"

const ListTodosComponent = () => {

    // static todos 
    // const today = new Date()
    // const targetDate = new Date(today.getFullYear()+1, today.getMonth(), today.getDay())
    // const todos = [
    //                 {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
    //                 {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //                 {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
    //             ]

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    //useEffect - tell React that your component needs to do something after render.
    useEffect(
        () => refreshTodos(), []
    )

    const refreshTodos = () => {
        retrieveAllTodosForUsernameApi('john')
            .then( 
                (response) => {
                    setTodos(response.data)
                }
            )
            .catch ((error) => console.log(error))

    }

    const deleteTodo = (id) => {
        deleteTodoApi('john', id)
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

    return (
        <div className="container">
            <h1>Things you want To Do!</h1>

            { message && <div className="alert alert-success w-50 m-auto p-2">{message}</div> }
            
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Description</th>
                            <th scope="col">Is Done?</th>
                            <th scope="col">Target Date</th>
                            <th scope="col">Action</th>
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
                                            <button className="btn btn-danger" 
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