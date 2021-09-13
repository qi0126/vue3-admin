import router from './index'
import { getToken } from '@/utils/auth'
import { ElMessageBox } from 'element-plus'
// 进度条
import NProgress from 'nprogress'
// NProgress配置右上角loading样式,默认为true
NProgress.configure({ showSpinner: true })

const isExt = (path) => /https|www/.test(path)
router.beforeEach((to, from, next) => {
  // 阻止外链跳转在路由中跳转
  if (isExt(to.path)) {
    next(from.path)
  }

  // 开始进度条
  NProgress.start()
  const token = getToken()
  // 判断两个分支情况
  if (token) {
    NProgress.done()
    next()
  } else {
    if (to.path === '/login') {
      NProgress.done()
      next()
    } else {
      ElMessageBox.alert('token为空,返回登录页', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        NProgress.done()
        next({ path: '/login' })
      })
    }
  }
})

router.afterEach(() => {
  // 完成进度条
  NProgress.done()
})
