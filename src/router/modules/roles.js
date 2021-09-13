import Layout from '@/layout/index.vue'

export default {
  path: '/roles',
  component: Layout,
  alwaysShow: true,
  meta: {
    // 只有在子路由两个以上时才会展示,子路由为一个时展示子路由中的meta
    title: '权限管理',
    icon: 'el-icon-lock'
  },
  children: [
    {
      path: 'index',
      name: 'Index',
      component: () => import('@/views/roles/index.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '角色列表',
        icon: 'el-icon-menu',
        activeMenu: '/roles/index' // 控制默认激活展示的路由
      }
    },
    {
      path: 'rights',
      name: 'Rights',
      component: () => import('@/views/roles/rights.vue'),
      hidden: false, // 控制展示
      meta: {
        title: '权限列表',
        icon: 'el-icon-s-data'
      }
    }
  ]
}
