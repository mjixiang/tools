import axios from 'axios'
import qs from 'qs'

export function Post (url) {
  return (body, header = {}) => _request({
    url,
    method: 'post',
    header: Object.assign({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }, header),
    data: qs.stringify(body)
  })
}

export function Delete (url) {
  return (body, header = {}) => _request({
    url,
    method: 'delete',
    header: Object.assign({
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    }, header),
    data: qs.stringify(body)
  })
}

export function Get (url) {
  return (params, header = {}) => _request({
    url,
    method: 'get',
    params: params || null,
    header: Object.assign({
      'Accept': 'application/json'
    }, header)
  })
}

export function Put (url) {
  return (body, header = {}) => _request({
    url,
    method: 'put',
    header: Object.assign({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, header),
    data: qs.stringify(body)
  })
}

// 不用捕获异常，就是让外部处理异常
async function _request (url, options) {
  return new Promise((resolve, reject) => {
    axios(url, options).then(({
      data
    }) => {
      if (data.status === 8888) {
        reject(new Error('正在前往登录...'))
      } else {
        data.status === 200 ? resolve(data.data) : reject(new Error(data.message || '未知错误'))
      }
    }).catch(err => {
      reject(err)
    })
  })
}

export const querySourceData = (method, url) => {
  return (params = {}, config = {}) => new Promise((resolve, reject) => {
    if (['get', 'delete'].indexOf(method.toLowerCase()) > -1) {
      params = Object.assign({
        params
      }, config)
    } else {
      params = qs.stringify(params)
    }
    return axios[method](url, params, config).then(({
      data
    }) => {
      resolve(data)
    }).catch((err) => {
      reject(new Error(getErrMessage(err)))
    })
  })
}

function getErrMessage (err) {
  var message = ''
  if (err.message === 'Network Error') {
    message = '网络连接失败，请检查网络状态！'
  } else if (err.response) {
    message = err.response.status === 404 ? '接口地址不存在' : (err.response.status === 400 && err.response.data && err.response.data.message)
  } else {
    message = err.message || '通讯异常'
  }
  return message
}
