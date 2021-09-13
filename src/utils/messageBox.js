import { ElMessageBox, ElMessage } from 'element-plus'

/**
 * 描述
 * 一些操作拦截,强制用户行为等场景
 * 弹窗提示,只能点击确认键退出
 * @date 2021-04-26
 * @param {String} content '这是一段内容'
 * @param {String} btnText '按钮文字'
 * @returns {Promise}  返回一个promise对象执行异步操作,需要处理
 */
export const isAlertBox = async (content, btnText) => {
  await ElMessageBox.alert(content, '提示', {
    confirmButtonText: btnText,
    distinguishCancelAndClose: true,
    showClose: false
  }).catch((e) => e)
}

/**
 * 描述
 * 删除对话框(确认删除,取消删除)
 * @date 2021-04-26
 * @returns {Promise}
 * 返回一个promise对象执行异步操作,需要处理
 * 根据返回值执行下步操作
 */
export const isDelConfirmBox = async () => {
  let flag = await ElMessageBox.confirm('此操作将永久删除, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).catch((e) => e)
  if (flag === 'confirm') {
    ElMessage.success('删除成功!')
    return true
  } else {
    ElMessage.info('已取消删除')
    return false
  }
}

/**
 * 描述
 * 带有输入框验证功能的弹框,返回输入状态和输入的值
 * @date 2021-04-26
 * @param {String} text  提示语
 * @param {String} test  正则表达式
 * @param {String} msg   正则验证提示语
 * @returns {Promise}
 * 返回一个promise对象执行异步操作,需要处理
 * 根据返回值执行下步操作
 */
export const isPromptBox = async (text, test, msg) => {
  let { action, value } = await ElMessageBox.prompt(`请输入${text}`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    inputPattern: test,
    inputErrorMessage: `${msg}格式不正确`,
    inputValue: '初始文本',
    center: true,
    buttonSize: 'small'
  }).catch((e) => e)
  if (action == 'confirm') {
    ElMessage.success('录入成功!')
    return value
  } else {
    ElMessage.info('取消输入')
    return false
  }
}

/**
 * 描述
 * 区分取消与关闭
 * @date 2021-04-26
 * @param {String} text
 * @param {String} confirmText='确认'
 * @param {String} cancelText='取消'
 * @returns {Promise}  返回一个promise对象执行异步操作,需要处理
 * confirm 确认操作
 * cancel  取消操作
 * close  不执行操作
 * 根据返回值执行下步操作
 */
export const isConfirmBox = async (
  text,
  cancelText = '取消',
  confirmText = '确认'
) => {
  let flag = await ElMessageBox.confirm(text, '提示', {
    distinguishCancelAndClose: true,
    cancelButtonText: cancelText,
    confirmButtonText: confirmText,
    center: true,
    buttonSize: 'small'
  }).catch((e) => e)
  if (flag == 'confirm') {
    return '右'
  } else {
    if (flag == 'close') {
      return ElMessage.info('取消操作')
    } else {
      return '左'
    }
  }
}
