import Layout from '@/layout/index.vue'

export default {
  path: '/link',
  component: Layout,
  children: [
    {
      path: 'https://www.baidu.com',
      meta: {
        title: '百度外链',
        icon: 'el-icon-search'
      }
    }
  ]
}
