import axios from 'axios'

const axiosClient = axios.create({
  // baseURL: 'https://api.ezfrontend.com/',
  baseURL: 'http://localhost:81/2021/LARAVEL/laravel_jwt/laravel-jwt-auth/public/api/',
  headers: {
    'content-type': 'aplication/json'
  }
})
//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response

  console.log(error.response);
  const { config, status } = error.response
  const { email } = JSON.parse(error.response.data)
  const listURl = ['/api/auth/register', '/api/auth/login']
  if (listURl.includes(config.url) && status === 400) {
    throw new Error(email[0])
  }
  return Promise.reject(error);
});


export default axiosClient