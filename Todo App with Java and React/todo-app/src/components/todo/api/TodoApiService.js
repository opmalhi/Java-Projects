import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})

export const retrieveAllTodosForUsername = async (username) => {
    return await apiClient.get(`/users/${username}/todos`)
}