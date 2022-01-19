import axios, { AxiosInstance } from 'axios'

const requestMap = new Map()
console.log(requestMap)

const request: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 10 * 1000
})

request.interceptors.request.use(
  config => {
    console.log(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  response => {
    console.log(response)
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
