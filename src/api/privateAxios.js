import axios from "axios"

const privateAxios = axios.create({
    baseURL: "/api",
    timeout: 10000,
    withCredentials: true
});

exx