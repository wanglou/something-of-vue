import axios from 'axios'
import * as config from '../config.js'
import store from '../store'
import querystring from 'querystring'

const service = axios.create({
  baseURL: config.API_ROOT,
  timeout: 5000
})

// 拦截器
service.interceptors.request.use(config => {
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    config.data = querystring.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  if (response.data.code === -2) {
    window.location.href = '/'
  }
  return response
}, error => {
  // return Promise.reject(error)
})

export default service
