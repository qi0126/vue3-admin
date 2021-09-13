<template>
  <el-aside>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMene"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        unique-opened
        router
        :collapse-transition="false"
        :collapse="$store.getters.isCollapse"
      >
        <sidebar-item
          v-for="item in contentRoter"
          :key="item.path"
          :item="item"
          :base-path="item.path"
        />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script setup>
// 侧边栏item
import SidebarItem from './G-sidebar/SidebarItem.vue'
// 引入外部scss文件使用变量设置el-menu的参数配置
import variables from '@/styles/variables.module.scss'
// 响应式api  计算属性
import { computed, defineProps } from 'vue'
// 响应式api  当前路由信息
import { useRoute } from 'vue-router'
//  获取router配置文件中导出的全部路由信息
import { contentRoter } from '@/router'

// 当前激活菜单的 index的参数(控制高亮显示)
const activeMene = computed(() => {
  // 解构当前路由信息
  const { meta, path } = useRoute()
  // 判断activeMenu字段是否存在
  if (meta.activeMenu) {
    // 如果存在返回activeMenu
    return meta.activeMenu
  }
  // 返回当前路由path
  return path
})
</script>

<style lang="scss" scoped>
.el-scrollbar {
  min-height: calc(100vh - 50px);
  background: #304156;
  border: none;
}
.el-menu {
  border: none;
}
</style>
