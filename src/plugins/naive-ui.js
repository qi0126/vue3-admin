// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
// import 'vfonts/FiraCode.css'

//  全局引入
// import naive from 'naive-ui'
// export default naive

import {
  create,
  NButton,
  NGradientText,
  NConfigProvider,
  NSpace,
  NInput,
  NDatePicker
} from 'naive-ui'

export default create({
  components: [
    NConfigProvider,
    NButton,
    NGradientText,
    NSpace,
    NInput,
    NDatePicker
  ]
})
