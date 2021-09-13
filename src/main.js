import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/router/permission'
import store from './store'

import Element from './plugins/element'
import Antd from './plugins/antd'
import Naive from './plugins/naive-ui'
import Vant from './plugins/vant'

// css全局样式重置插件
import 'normalize.css/normalize.css'
import './styles/index.scss'
import './styles/my-element.css'
import 'nprogress/nprogress.css'
import 'animate.css'

export default createApp(App)
  .use(router)
  .use(store)
  .use(Element)
  .use(Antd)
  .use(Naive)
  .use(Vant)
  .mount('#app')

if (import.meta.env.MODE === 'production') {
  console.log('当前是生产环境')
} else {
  console.log('当前是开发环境')
}
