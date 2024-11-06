const ListTodosComponent = () => {

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+1, today.getMonth(), today.getDay())

    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate},
                ]

    return (
        <div className="container">
            <h1>Things you want To Do!</h1>
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Description</th>
                            <th scope="col">Is Done?</th>
                            <th scope="col">Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
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