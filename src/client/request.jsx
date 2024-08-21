import axios from "axios";

const client = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
  withCredentials: true,
});

// Add a request interceptor
client.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: "Bearer " + token,
      };
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
client.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (err) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const status = err.response?.status || 500;
    // we can handle global errors here
    switch (status) {
      // authentication (token related issues)
      case 401: {
        return Promise.reject(err.response?.data);
      }
      // forbidden (permission related issues)
      case 403: {
        return Promise.reject(err.response?.data);
      }

      // bad request
      case 400: {
        return Promise.reject(err.response?.data);
      }

      // not found
      case 404: {
        return Promise.reject(err.response?.data);
      }

      // conflict
      case 409: {
        return Promise.reject(err.response?.data);
      }

      // unprocessable
      case 422: {
        return Promise.reject(err.response?.data);
      }

      // generic api error (server related) unexpected
      default: {
        return Promise.reject(err.response?.data);
      }
    }
  }
);
export { client };
