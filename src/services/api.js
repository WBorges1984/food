import axios from "axios";

 const URL_SERVER = "http://localhost:3001";
 //const URL_SERVER = "https://177.120.63.182:3001";
// const URL_SERVER = import.meta.env.URL_SERVER;

const api = axios.create({
    baseURL: URL_SERVER
});

export default api;