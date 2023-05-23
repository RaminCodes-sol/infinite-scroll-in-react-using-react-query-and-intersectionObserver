import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:4000'

export const getUsers = async ({ pageParam = 1 }) => {
    const response = await axios.get(`/users?_limit=4&_page=${pageParam}`)
    return response.data
}
