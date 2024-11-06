import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import ListTodosComponent from "./ListTodosComponent"
import WelcomeComponent from "./WelcomeComponent"
import ErrorComponent from "./ErrorComponent"
import LoginComponent from "./LoginComponent"
import LogoutComponent from "./LogoutComponent"
import AuthProvider, { useAuth } from "./security/AuthContext"

import "./TodoApp.css"

const AuthenticatedRoute = ( {children} ) => {
    const authContext = useAuth()
    if(authContext.isAuthenticated){
        return children
    }

    return <Navigate to="/" />
}

const TodoApp = () => {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <Router>
                    <HeaderComponent />
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />

                        <Route path="/welcome/:username" element={
                            <AuthenticatedRoute>
                                <WelcomeComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
                        
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>
                <FooterComponent />
            </AuthProvider>
        </div>
    )
}

export default TodoApp