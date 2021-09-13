import request from '@/utils/request'

export const getUsers = (params) =>
  request({
    url: 'users',
    method: 'get',
    params
  })

export const postUsers = (data) =>
  request({
    url: 'users',
    method: 'post',
    data
  })

export const putUsers = (user) =>
  request({
    url: `users/${user.id}/state/${user.mg_state}`,
    method: 'put'
  })

export const deleteUsers = (user) =>
  request({
    url: `users/${user.id}`,
    method: 'delete'
  })

export const updatePutUser = (id, data) =>
  request({
    url: `users/${id}`,
    method: 'put',
    data
  })
