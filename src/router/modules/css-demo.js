import Layout from '@/layout/index.vue'

export default {
  path: '/css',
  component: Layout,
  meta: {
    title: '导航',
    icon: 'el-icon-s-home'
  },
  children: [
    {
      path: 'demo',
      name: 'Demo',
      component: () => import('@/views/css/demo.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '首页',
        icon: 'el-icon-s-home',
        activeMenu: '/demo' // 控制默认激活展示的路由
      }
    }
  ]
}
