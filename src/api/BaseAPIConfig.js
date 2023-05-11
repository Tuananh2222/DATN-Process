import axios from "axios";
let BaseAPIConfig = axios.create({ baseURL: process.env.VUE_APP_URL_SERVICE });

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