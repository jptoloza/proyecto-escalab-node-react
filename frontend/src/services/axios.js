import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST
})

instance.interceptors.request.use(function (config) {
  if (window.localStorage.getItem('_token')) {
    config.headers.Authorization = 'bearer ' + window.localStorage.getItem('_token')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default instance
