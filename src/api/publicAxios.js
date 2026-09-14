import axios from "axios"

const publicAxios = axios.create({
    baseURL: "http://192.168.1.100:3500/api",
    timeout: 10000,
    withCredentials: true
});

export default publicAxios;