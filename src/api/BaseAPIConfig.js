import axios from "axios";
let BaseAPIConfig = axios.create({ baseURL: "http://localhost:5294/api/" });

BaseAPIConfig.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error && error.response && error.response.status == 401) {
            console.log("expired");
        }
        return Promise.reject(error);
    }
);



export default BaseAPIConfig;