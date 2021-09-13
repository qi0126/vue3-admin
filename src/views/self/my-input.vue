<template>
  <el-divider><el-tag type="success">搜索</el-tag></el-divider>
  <el-row type="flex" justify="space-around" align="center">
    <MySearch v-model:text="text" :method="feimt" />
  </el-row>
  <el-divider><el-tag type="success">选择器</el-tag></el-divider>
  <el-row type="flex" justify="space-around" align="center">
    <MySelect
      v-model:text="select.text"
      :opt="options"
      v-model:code="select.code"
      :isFilter="false"
    />
  </el-row>
  <el-divider><el-tag type="success">日期选择器</el-tag></el-divider>
  <el-row type="flex" justify="space-around" align="center">
    <MyTimePicker
      v-model:times="isTime.time"
      v-model:start="isTime.start"
      v-model:end="isTime.end"
    />
  </el-row>
  <el-divider><el-tag type="success">上传文件</el-tag></el-divider>
  <el-row type="flex" justify="space-around" align="center">
    <MyUpload
      :action="'http://106.14.7.156:18620/api/v1/contract/upload'"
      v-model:backRes="backRes"
    />
  </el-row>
  <el-divider><el-tag type="success">导出下载</el-tag></el-divider>
  <el-row type="flex" justify="space-around" align="center">
    <MyExport
      :href="'http://aimin-img.oss-cn-hangzhou.aliyuncs.com/sublime.png'"
    />
  </el-row>
</template>

<script setup>
import MySearch from 'com/My-Search.vue'
import MySelect from 'com/My-Select.vue'
import MyTimePicker from 'com/My-TimePicker.vue'
import MyUpload from 'com/My-Upload.vue'
import MyExport from 'com/My-Export.vue'
import { getUsers } from '@/api/users'
import { reactive, ref, watch } from 'vue'
import inform, { success } from '@/utils/Inform'

const text = ref('')
const feimt = async () => await getUsers(text)

const options = [
  {
    value: '选项1',
    label: '黄金糕'
  },
  {
    value: '选项2',
    label: '双皮奶'
  }
]

const select = reactive({
  text: '',
  code: ''
})
watch(select, (v) => success(`返回的label${v.code},返回的value${v.text}`))

const isTime = reactive({
  time: [],
  start: '',
  end: ''
})
watch(isTime, () =>
  success(`开始时间:${isTime.start} \n 结束时间: ${isTime.end}`)
)

const backRes = ref(null)
watch(backRes, (res) => {
  inform(`文件上传返回状态码:${res.code}`).then(() => {
    inform(`文件上传返回消息提示:${res.message}`)
  })
})
</script>
<style scoped>
::v-deep(.el-divider__text) {
  background: transparent;
}
</style>
