import Layout from '@/layout/index.vue'

export default {
  path: '/users',
  redirect: '/users/index',
  component: Layout,
  // alwaysShow: true,
  meta: {
    title: '用户管理',
    icon: 'el-icon-user'
  },
  children: [
    {
      path: 'index',
      name: 'Users',
      component: () => import('@/views/users/index.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '用户列表',
        icon: 'el-icon-user',
        activeMenu: '/users/index' // 控制默认激活展示的路由
      }
    }
  ]
}
