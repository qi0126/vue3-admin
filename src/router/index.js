import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import Home from './modules/home'
import Link from './modules/link'
import Self from './modules/self'
import Users from './modules/users'
import Roles from './modules/roles'

/**
 * 注意:子菜单只在路径子时出现.length >= 1
 * hidden: true                   如果设置为真，项目将不会显示在侧边栏中(默认为false)
 * alwaysShow: true               如果设置为真，将始终显示根菜单(默认为false)
 *                                如果没有设置alwaysShow，当项目有多个子路由时,
 *                                它将变成嵌套模式，否则不会显示根菜单
 * redirect: noRedirect           如果设置了noRedirect将不会在面包屑中重定向
 * name:'router-name'             该名称由<keep-alive>使用(必须设置!!)
 * meta : {
    title: 'title'               在侧边栏和面包屑中显示的名称(推荐设置)
    icon: 'svg-name'/'el-icon-x' 图标显示在侧边栏中
    activeMenu: '/example/list'  如果设置路径，侧边栏将突出显示您设置的路径
  }
 */

const basRoutes = [
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/Login.vue')
  }
]

export const contentRoter = [Home, Users, Roles, Self, Link]

const routes = basRoutes.concat(contentRoter)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
