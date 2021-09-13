<template>
  <el-divider><el-tag type="success">对话框</el-tag></el-divider>
  <el-row :gutter="20">
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <el-button type="warning" @click="isAlert">强制提示框</el-button>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <el-button type="success" @click="isDelConfirm">删除询问框</el-button>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <el-button type="primary" @click="isPrompt">可输入弹框</el-button>
      </div></el-col
    >
    <el-col :span="6"
      ><div class="grid-content bg-purple">
        <el-button type="success" @click="isConfirm">指示弹框</el-button>
      </div></el-col
    >
  </el-row>
  <el-divider><el-tag type="success">通知</el-tag></el-divider>
  <el-row :gutter="20" type="flex" justify="space-around">
    <el-col :span="4"
      ><div class="grid-content bg-purple">
        <el-button type="primary" @click="inform('inform')">通用</el-button>
      </div></el-col
    >
    <el-col :span="4"
      ><div class="grid-content bg-purple">
        <el-button type="success" @click="success('success')">成功</el-button>
      </div></el-col
    >
    <el-col :span="4"
      ><div class="grid-content bg-purple">
        <el-button type="warning" @click="warning('warning')">警告</el-button>
      </div></el-col
    >
    <el-col :span="4"
      ><div class="grid-content bg-purple">
        <el-button type="info" @click="info('info')">消息</el-button>
      </div></el-col
    >
    <el-col :span="4"
      ><div class="grid-content bg-purple">
        <el-button type="danger" @click="error('error')">错误</el-button>
      </div></el-col
    >
  </el-row>
</template>

<script setup>
import {
  isAlertBox,
  isDelConfirmBox,
  isPromptBox,
  isConfirmBox
} from '@/utils/messageBox'
import { ElMessage } from 'element-plus'
import inform, { success, warning, info, error } from '@/utils/Inform'

const isAlert = async () => {
  await isAlertBox('提示内容', '按钮文字')
}

const isDelConfirm = async () => {
  await isDelConfirmBox()
}

const isPrompt = async () => {
  let data = await isPromptBox('提示文字', /^[0-9]*$/, '数字')
  if (data) {
    ElMessage.success(data)
  }
}

const isConfirm = async () => {
  let flag = await isConfirmBox('提示文字', '左边', '右边')
  if (flag === '右') {
    ElMessage.success('点击了右边')
  } else if (flag === '左') {
    ElMessage.warning('点击了左边')
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  padding: 20px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
