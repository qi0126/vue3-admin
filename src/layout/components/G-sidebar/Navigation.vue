<template>
  <!-- 侧边栏图标 -->
  <i v-if="icon" class="sub-el-icon" :class="icon"></i>
  <!-- 侧边栏当前显示为close时不重复展示标题 -->
  <span v-if="!$store.getters.isCollapse" class="title">{{ title }}</span>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  font-size: 20px;
}
.title {
  margin-left: 10px;
}
</style>
