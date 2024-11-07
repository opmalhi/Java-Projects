import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

const LoginComponent = () => {

    const [username, setUsername] = useState('john')
    const [password, setPassword] = useState('')
    // const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value)
    }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = () => {
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMessage(true)
        }
    }

    const formStyle = {
        width: '35%', 
        margin: '5% 35%', 
        textAlign: 'left'
    }

    return (
        <div className="container" style={formStyle}>
            <h1 className="text-center">Time to Login!</h1>
            {/* {showSuccessMessage && 
                <div className="alert alert-success successMessage" role="alert">
                    Authenticated Successfully!
                </div>
            } */}
            
            {showErrorMessage && 
                <div className="alert alert-danger errorMessage" role="alert">
                    Authentication Failed! Please check your credentials.
                </div>
            }
             
            <form>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name="username" 
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div> 
                <button type="button" className="btn btn-primary float-end w-25" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default LoginComponent