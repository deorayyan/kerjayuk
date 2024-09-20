import axios from "axios";

const genericSuccessResponseInterceptor = function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
};
const genericErrorResponseInterceptor = function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return Promise.reject(
      error.response?.data?.errors ||
        error?.response?.data ||
        error?.response?.data?.statusMessage
    );
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    return Promise.reject(new Error(error?.message || "Request Timeout"));
  } else {
    // Something happened in setting up the request that triggered an Error
    return Promise.reject(error.message);
  }
};

/**
 * Client Side Request
 */
export const $http = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

// Add a request interceptor
$http.interceptors.request.use(async function async(config) {
  return config;
});

$http.interceptors.response.use(
  genericSuccessResponseInterceptor,
  genericErrorResponseInterceptor
);

export default $http;
