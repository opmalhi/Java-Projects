import { apiClient } from "./ApiClient"

export const retrieveHelloWorld = async () => {
    return await apiClient.get('/hello-world')
}

export const retrieveHelloWorldBean = async () => {
    return await apiClient.get('/hello-world-bean')
}

export const retrieveHelloWorldPathVariable = async (username, token) => {
    return await apiClient.get(`/hello-world/path-variable/${username}`
    //     ,{
    //     headers: {
    //         Authorization: token
    //     }
    // }
    )
}
