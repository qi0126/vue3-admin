<template>
  <el-input
    placeholder="请输入搜索内容"
    v-model="text"
    prefix-icon="el-icon-search"
    clearable
  >
    <template #append>
      <el-button icon="el-icon-search" @click="method"></el-button>
    </template>
  </el-input>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    defalut: ''
  },
  method: {
    type: Function
  }
})
</script>
