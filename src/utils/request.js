import axios from 'axios'
import { getToken } from '@/utils/auth'
import { ElMessage } from 'element-plus'
import NProgress from 'nprogress'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3 * 60 * 1000
})

// 请求拦截器，在请求头中添加token
request.interceptors.request.use(
  (config) => {
    NProgress.start()
    config.headers['Authorization'] = getToken()
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// axios响应拦截器
request.interceptors.response.use(
  (response) => {
    NProgress.done()
    const msg = response.data.meta.msg
    const status = response.data.meta.status
    const res = response.data.data
    // console.log(status)
    // console.log(res)
    switch (status) {
      case 200:
        ElMessage.success(msg)
        return res
      case 201:
        ElMessage.success(msg)
        return res
      case 400:
        ElMessage.error(msg)
        break
      default:
        ElMessage({
          message: msg || '错误',
          type: 'error',
          duration: 2000
        })
        return Promise.reject(new Error(msg || '错误'))
    }
  },
  (error) => {
    NProgress.done()
    console.log('err' + error) // for debug
    ElMessage({
      message: error || '请求超时',
      type: 'error',
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default request
