<template>
  <el-container direction="vertical">
    <GHeader />
    <el-container>
      <GSidebar
        :width="$store.getters.isCollapse ? '60px' : '200px'"
        class="aside"
      />
      <el-main>
        <el-card>
          <template #header style="height:50px;">
            <GNav />
          </template>
          <Router-view />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import GHeader from './components/G-header.vue'
import GSidebar from './components/G-sidebar.vue'
import GNav from './components/G-nav.vue'
</script>

<style lang="scss" scoped>
.aside {
  transition: 0.3s;
  overflow: hidden;
}

// 调整侧边栏收缩后角标定位问题  vue3样式穿透写法::v-deep()
::v-deep(.el-submenu__icon-arrow, .el-submenu__icon-arrow::before) {
  margin-top: -5px !important;
  right: 10px;
  font-weight: 700;
  font-size: 14px;
}

::v-deep(.el-card__header) {
  padding: 10px;
}

.el-card {
  min-height: calc(100vh - 100px);
  background: url('./bg.png') no-repeat;
  background-size: 100% 400px;
  background-position: bottom;
}
</style>
