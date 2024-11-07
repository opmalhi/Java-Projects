import { createContext, useContext, useState } from "react";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other component
const AuthProvider = ({ children }) => {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)

    const login = (username, password) => {
        if(username === 'john' && password === 'dummy'){
            setAuthenticated(true)
            setUsername(username)
            return true
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }
    }

    const logout = () => {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider