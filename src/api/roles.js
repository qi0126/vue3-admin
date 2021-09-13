import request from '@/utils/request'


export const getRoles = (params) =>
  request({
    url: 'roles',
    method: 'get',
    params
  })

export const AddRoles = (data) =>
  request({
    url: 'roles',
    method: 'post',
    data
  })

export const updateRoles = (data) =>
  request({
    url: `roles/${data.id}`,
    method: 'put',
    data
  })

export const delRoles = (id) =>
  request({
    url: 'roles/' + id,
    method: 'delete'
  })
