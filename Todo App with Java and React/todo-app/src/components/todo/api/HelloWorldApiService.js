import axios from "axios"

const apiClient = axios.create({
    baseURL: 'http://localhost:8080'
})

export const retrieveHelloWorld = async () => {
    return await apiClient.get('/hello-world')
}

export const retrieveHelloWorldBean = async () => {
    return await apiClient.get('/hello-world-bean')
}

export const retrieveHelloWorldPathVariable = async (username) => {
    return await apiClient.get(`/hello-world/path-variable/${username}`)
}