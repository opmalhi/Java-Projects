import { createContext, useContext, useState } from "react";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other component
const AuthProvider = ({ children }) => {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    const login = (username, password) => {
        if(username === 'username' && password === 'dummy'){
            setAuthenticated(true)
            return true
        } else {
            setAuthenticated(false)
            return false
        }
    }

    const logout = () => {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider