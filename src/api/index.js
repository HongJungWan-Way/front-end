import axios from "axios";

function apiInstance() {
    const instance = axios.create({
        baseURL: `${process.env.VUE_APP_API_BASE_URL}`,
        withCredentials: true,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
    });

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
    );

    return instance;
}

export { apiInstance };