import Layout from '@/layout/index.vue'

export default {
  path: '/self',
  redirect: '/self/table',
  component: Layout,
  alwaysShow: true,
  meta: {
    // 只有在子路由两个以上时才会展示,子路由为一个时展示子路由中的meta
    title: '组件封装',
    icon: 'el-icon-s-promotion'
  },
  children: [
    {
      path: 'table',
      name: 'Table',
      component: () => import('@/views/self/Table.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '表格',
        icon: 'el-icon-s-order',
        activeMenu: '/self/table' // 控制默认激活展示的路由
      }
    },
    {
      path: 'pagination',
      name: 'Pagination',
      component: () => import('@/views/self/Pagination.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '分页',
        icon: 'el-icon-suitcase-1'
      }
    },
    {
      path: 'message-box',
      name: 'MessageBox',
      component: () => import('@/views/self/message-box.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '对话框+通知',
        icon: 'el-icon-suitcase-1'
      }
    },
    {
      path: 'my-input',
      name: 'MyInput',
      component: () => import('@/views/self/my-input.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '输入框',
        icon: 'el-icon-suitcase-1'
      }
    },
    {
      path: 'qrcode',
      name: 'Qrcode',
      component: () => import('@/views/self/qrcode.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '二维码',
        icon: 'el-icon-suitcase-1'
      }
    },
    {
      path: 'UI',
      name: 'UI',
      component: () => import('@/views/self/UI.vue'),
      hidden: false, // 控制展示
      meta: {
        title: 'UI框架',
        icon: 'el-icon-suitcase-1'
      }
    },
    {
      path: 'tailwindcss',
      name: 'tailwindcss',
      component: () => import('@/views/self/tailwindcss.vue'),
      hidden: false, // 控制展示
      meta: {
        title: 'tailwindcss',
        icon: 'el-icon-suitcase-1'
      }
    },
    {
      path: 'doraemon',
      name: 'doraemon',
      component: () => import('@/views/self/doraemon.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '哆啦A梦',
        icon: 'el-icon-suitcase-1'
      }
    }
  ]
}
