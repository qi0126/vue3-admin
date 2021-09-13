<template>
  <!-- 根据路由配置中的hidden属性控制展示 -->
  <div v-if="!item.hidden">
    <!-- 根据父组件传过来的路由信息,判断有无子路由 -->
    <template v-if="isShow">
      <!-- 侧边栏跳转组件 -->
      <AppLink v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <!-- 侧边栏展示组件 -->
          <Navigation
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="onlyOneChild.meta.title"
          />
          <template #title
            ><span v-if="$store.getters.isCollapse" class="title">{{
              onlyOneChild.meta.title
            }}</span>
          </template>
        </el-menu-item>
      </AppLink>
    </template>
    <el-submenu
      v-else
      :index="resolvePath(item.path)"
      :key="resolvePath(item.path)"
      :popper-append-to-body="true"
      class="submenu"
    >
      <template #title>
        <!-- 侧边栏展示组件 -->
        <Navigation
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="item.meta.title"
        />
      </template>
      <!-- 递归组件,调用自身,遍历二级以下路由 -->
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script setup>
// 在客户端端获取path模块,用于解析路径
import path from 'path-browserify'
// 标题和icon组件
import Navigation from './Navigation.vue'
// 具有判断是否为外链的组件
import AppLink from './AppLink.vue'
// 响应式api  props,响应式data
import { defineProps, ref, computed } from 'vue'

// 父组件传过来得到的值
const props = defineProps({
  // 每条子路由的信息
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  // 用于递归组件在后拼接的路径
  basePath: {
    type: String,
    default: ''
  }
})

/**
 * 描述
 * @date 2021-04-19
 * hasOneShowingChild判断路由的基础信息并处理
 * onlyOneChild 判断是否为末端路由和自己添加的属性
 * props.item.alwaysShow 为true时为展示
 */
const isShow = computed(
  () =>
    hasOneShowingChild(props.item.children, props.item) &&
    (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
    !props.item.alwaysShow
)

const onlyOneChild = ref(null)

/**
 * 描述    通过路由配置信息判断可展示的内容
 * @date 2021-04-17
 * @param {any} children=[] 路由中children
 * @param {any} parent  判断的路由
 * @returns {Boolean}
 */
const hasOneShowingChild = (children = [], parent) => {
  // 通过数组的filter方法过滤得到新数组
  const showingChildren = children.filter((item) => {
    // 如果存在hidden属性,返回空数组
    if (item.hidden) {
      return false
    } else {
      // 临时设置(将在只有一个显示子元素时使用)
      onlyOneChild.value = item
      return true
    }
  })
  // 当只有一个子路由器时，默认显示该子路由器
  if (showingChildren.length === 1) {
    return true
  }
  // 如果没有子路由器显示，则显示parent
  if (showingChildren.length === 0) {
    // noShowingChildren 没有可展示的子路由
    onlyOneChild.value = { ...parent, path: '', noShowingChildren: true }
    return true
  }
  return false
}

//  判断地址格式,是否外链
const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path)

// 区分外链和本地路由
const resolvePath = (routePath) => {
  // 如果是外链,返回外链地址
  if (isExternal(routePath)) {
    return routePath
  }
  // 判断默认地址,返回默认地址
  if (isExternal(props.basePath)) {
    // 通过父组件传递过来的属性
    return props.basePath
  }
  // 返回解析后的地址
  // console.log(props.basePath, '接受的递归信息') // / 接受的递归信息
  // console.log(routePath, '传入的路径') // home 传入的路径
  // console.log(path.resolve(props.basePath, routePath), '拼接后的路径') // /home 拼接后的路径
  return path.resolve(props.basePath, routePath)

  // path.resolve()
  // 方法会把一个路径或路径片段的序列解析为一个绝对路径。
  // 给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0 10px;
  margin-left: 30px;
}
</style>
