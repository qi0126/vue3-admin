<template>
  <el-upload
    :on-success="handleChange"
    :on-error="handleChange"
    :file-list="fileList"
    :headers="{ accessToken: getToken() }"
    name="file"
    :limit="1"
    :action="action"
    :show-file-list="false"
    style="margin-right: 10px"
  >
    <el-button size="small" type="primary">{{ text }}</el-button>
  </el-upload>
</template>

<script setup>
import { getToken } from '@/utils/auth'
import { defineEmit, defineProps, ref } from 'vue'

const props = defineProps({
  action: {
    type: String
  },
  text: {
    type: String,
    default: '上传文件'
  },
  backRes: {
    type: Object
  }
})
const emit = defineEmit(['update:backRes'])
const fileList = ref([])

const handleChange = (res, file, fileList) => {
  if (res) {
    emit('update:backRes', res)
  }
}
</script>
<style scoped>
.el-button {
  margin: 0 10px;
}
</style>
