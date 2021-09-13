<template>
  <el-button type="primary" size="small">
    <a :href="href">{{ text }}</a>
  </el-button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  href: {
    type: String
  },
  text: {
    type: String,
    default: '下载'
  }
})
</script>

<style lang="scss" scoped>
a {
  color: white !important;
}
</style>
