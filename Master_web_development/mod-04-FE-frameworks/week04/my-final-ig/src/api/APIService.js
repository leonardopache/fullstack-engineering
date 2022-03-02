import axios from "axios"

const endpoint = axios.create({
    baseURL: "https://three-points.herokuapp.com/api",
    withCredentials: true, headers: {
        "Content-Type": "application/json"
    }
})

endpoint.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export const login = (body) => endpoint.post('/login', body)

export const logout = () => endpoint.post('/logout')

export const getPostList = () => endpoint.get('/posts')

export const getProfile = (id) => endpoint.get('/users/' + id)

