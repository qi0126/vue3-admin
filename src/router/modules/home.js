import Layout from '@/layout/index.vue'

export default {
  path: '/',
  redirect: '/home',
  component: Layout,
  meta: {
    title: '导航',
    icon: 'el-icon-s-home'
  },
  children: [
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '首页',
        icon: 'el-icon-s-home',
        activeMenu: '/home' // 控制默认激活展示的路由
      }
    }
  ]
}
