import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})

export const retrieveAllTodosForUsernameApi = async (username) => {
    return await apiClient.get(`/users/${username}/todos`)
}

export const deleteTodoApi = async (username, id) => {
    return await apiClient.delete(`/users/${username}/todos/${id}`)
}

export const retrieveTodoApi = async (username, id) => {
    return await apiClient.get(`/users/${username}/todos/${id}`)
}

export const updateTodoApi = async (username, id, todo) => {
    return await apiClient.put(`/users/${username}/todos/${id}`, todo)
}