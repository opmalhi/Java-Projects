import { Link } from "react-router-dom"
import { useAuth } from "./security/AuthContext"


const HeaderComponent = () => {

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    const logout = () => {
        authContext.logout()
    }

    return (
        <div className="border-bottom border-light border-5 mb-4">
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid mx-5">
                    <a className="navbar-brand fs-2 fw-bold" href="/">ToDoApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item fs-5">
                                {
                                    isAuthenticated &&
                                    <Link className="nav-link" to="/welcome/in28minutes">Home</Link>
                                }
                            </li>
                            <li className="nav-item fs-5">
                                {
                                    isAuthenticated &&
                                    <Link className="nav-link" to="/todos">Todos</Link>
                                }
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                                {
                                    !isAuthenticated &&
                                    <Link className="nav-link" to="/login">Login</Link>
                                }
                            </li>
                            <li className="nav-item fs-5">
                                {
                                    isAuthenticated &&
                                    <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HeaderComponent