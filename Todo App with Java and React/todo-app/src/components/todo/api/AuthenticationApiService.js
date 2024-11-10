import { apiClient } from "../api/ApiClient";

export const executeBasicAuthenticationService = async (token) => {
    return await apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    })
}

export const executeJwtAuthenticationService = async (username, password) => {
    return await apiClient.post(`/authenticate`, {username, password})
}