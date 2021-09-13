// 全部引入
import Vant from 'vant'
import 'vant/lib/index.css'

// export default function(app) {
//   app.use(Vant)
// }

// 按需引入
// 引入组件
import Button from 'vant/es/button'
// // 引入组件对应的样式，若组件没有样式文件，则无须引入
// import 'vant/es/button/style'
export default function(app) {
  app.use(Button)
}
