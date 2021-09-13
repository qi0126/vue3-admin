import request from '@/utils/request'

export const login = (data) =>
  request({
    url: 'login',
    method: 'post',
    data
  })
