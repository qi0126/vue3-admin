<template>
  <!-- ant-design-vue -->
  <a-space direction="vertical">
    <a-date-picker />
  </a-space>
  <a-button type="primary">Primary</a-button>
  <a-button>Default</a-button>
  <a-button type="dashed">Dashed</a-button>
  <a-button type="danger">Danger</a-button>
  <a-config-provider :auto-insert-space-in-button="false">
    <a-button type="primary">按钮</a-button>
  </a-config-provider>
  <a-button type="primary">按钮</a-button>
  <a-button type="link">Link</a-button>
  <el-divider>
    <el-tag type="success">ant-design-vue</el-tag>
  </el-divider>
  <!-- element-plus -->
  <el-date-picker type="date" placeholder="选择日期"></el-date-picker>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <el-divider>
    <el-tag type="success">element-plus</el-tag>
  </el-divider>
  <!-- naive-ui -->
  <n-date-picker />
  <n-button>Default</n-button>
  <n-button type="primary">Primary</n-button>
  <n-button type="info">Info</n-button>
  <n-button type="success">Success</n-button>
  <n-button type="warning">Warning</n-button>
  <n-button type="error">Error</n-button>
  <br />
  <n-gradient-text type="error">炸了</n-gradient-text>
  <br />
  <n-gradient-text type="info">噢</n-gradient-text>
  <br />
  <n-gradient-text type="warning">注意</n-gradient-text>
  <br />
  <n-gradient-text type="success">成了</n-gradient-text>
  <el-divider>
    <el-tag type="success">naive-ui</el-tag>
  </el-divider>
  <!-- vant -->
  <van-button type="primary">主要按钮</van-button>
  <van-button type="success">成功按钮</van-button>
  <van-button type="default">默认按钮</van-button>
  <van-button type="warning">警告按钮</van-button>
  <van-button type="danger">危险按钮</van-button>
  <el-divider>
    <el-tag type="success">vant</el-tag>
  </el-divider>
  <button class="btn" @click="color = 'blue'">css属性绑定</button>
</template>

<script setup>
import { ref } from 'vue'
const color = ref('red')

</script>

<style  scoped>
::v-deep(.el-divider__text) {
  background: transparent;
}
.btn {
  background: v-bind(color);
}

button {
  margin: 10px;
}
</style>