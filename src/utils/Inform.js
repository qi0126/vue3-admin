/**
 * 描述 统一封装了侧边显示的通知框
 * @date 2021-04-27
 * 使用方式
 * import inform, { success, warning, info, error } from '@/utils/Inform'
 */

import { ElNotification } from 'element-plus'

export { success, warning, info, error }

const success = async (message) => {
  await ElNotification({
    type: 'success',
    title: '成功',
    message,
    showClose: false
  })
}

const warning = async (message) => {
  await ElNotification({
    type: 'warning',
    title: '警告',
    message,
    showClose: false
  })
}

const info = async (message) => {
  await ElNotification({
    type: 'info',
    title: '消息',
    message,
    showClose: false
  })
}

const error = async (message) => {
  await ElNotification({
    type: 'error',
    title: '错误',
    message,
    showClose: false
  })
}

const inform = async (message) => {
  await ElNotification({
    message,
    showClose: false
  })
}

export default inform
