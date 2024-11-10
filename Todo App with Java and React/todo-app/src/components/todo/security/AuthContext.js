import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

//1: Create a Context
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//2: Share the created context with other component
const AuthProvider = ({ children }) => {

    //3: Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [username, setUsername] = useState(null)
    const [token, setToken] = useState(null)

    // const login = (username, password) => {
    //     if(username === 'john' && password === 'dummy'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    // Basic Authentication 
    // const login = async (username, password) => {

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password)

    //     try {
    //         const response = await executeBasicAuthenticationService(baToken)
    
    //         if(response.status == 200){
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     // console.log('intercepting and adding a token')
    //                     config.headers.Authorization=baToken
    //                     return config
    //                 }
    //             )

    //             return true

    //         } else {
    //             logout()
    //             return false
    //         }
    //     } catch (error) {
    //         logout()
    //         return false
    //     }
    // }

    // JWT Authentication
    const login = async (username, password) => {

        try {
            const response = await executeJwtAuthenticationService(username, password)
    
            if(response.status == 200){

                const jwtToken = 'Bearer ' + response.data.token

                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        // console.log('intercepting and adding a token')
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )

                return true

            } else {
                logout()
                return false
            }
        } catch (error) {
            logout()
            return false
        }
    }
    
    const logout = () => {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout, username, token} }>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider