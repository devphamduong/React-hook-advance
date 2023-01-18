
import axios from 'axios';
import NProgress from 'nprogress';

const REACT_APP_BACKEND_URL = "http://localhost:8081/";
NProgress.configure({
    showSpinner: false,
    trickleSpeed: 100,
});

const instance = axios.create({
    baseURL: REACT_APP_BACKEND_URL,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        config.headers["Authorization"] = `Bearer ${access_token}`;
    }

    NProgress.start();
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
}, function (error) {
    NProgress.done();
    if (error.response.data && error.response.data.EC === -999) {
        alert('Access Token hết hạn. Vui lòng đăng nhập lại!')
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data
        ? error.response.data : Promise.reject(error);
});

export default instance;
