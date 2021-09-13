import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// 全局
import ElementPlus from 'element-plus'
export default function(app) {
  app.use(ElementPlus, { locale })
}
