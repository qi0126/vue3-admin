<template>
  <el-dialog
    title="添加用户"
    v-model="addUserDialogVisible"
    width="50%"
    @close="resetAddForm"
  >
    <el-form
      :model="addForm"
      :rules="addFormRules"
      ref="addFormRef"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="username">
        <!-- 用户名 -->
        <el-input v-model="addForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <!-- 密码 -->
        <el-input v-model="addForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <!-- 邮箱 -->
        <el-input v-model="addForm.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <!-- 电话 -->
        <el-input v-model="addForm.mobile"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="$emit('update:addUserDialogVisible', false)"
        >取 消</el-button
      >
      <el-button type="primary" @click="addUser">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref, defineProps, defineEmit } from 'vue'
import { ElMessage } from 'element-plus'
import { postUsers } from '@/api/users'

const prop = defineProps({
  addUserDialogVisible: {
    type: Boolean
  }
})
const addFormRef = ref(null)
const addForm = reactive({
  username: '测试22',
  password: '123456',
  email: 'p602s985@year.net',
  mobile: '18655471234'
})
const emit = defineEmit(['update:addUserDialogVisible'])
const addUser = () => {
  addFormRef.value.validate(async (valid) => {
    if (!valid) {
      return ElMessage.error('请正确填写用户信息')
    }
    await postUsers(addForm)
    addFormRef.value.resetFields()
    //关闭对话框
    emit('update:addUserDialogVisible', false)
  })
}
const resetAddForm = () => {
  addFormRef.value.resetFields()
  emit('update:addUserDialogVisible', false)
}
//1、自定义验证电话方法
const validMobile = (rules, value, callback) => {
  //非空
  if (!value) {
    return callback(new Error('电话不能为空'))
  }
  let reg = /^1[356789]\d{9}$/
  if (!reg.test(value)) {
    return callback(new Error('非法的电话'))
  }
  //放行
  callback()
}
//2、自定义的验证邮箱
const validateEamil = (rules, value, callback) => {
  //非空
  if (!value) {
    return callback(new Error('邮箱不能为空'))
  }
  let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]{2,}(\.com|.cn|\.com\.cn|\.org|\.net|\.edu)$/
  if (!reg.test(value)) {
    return callback(new Error('非法的邮箱'))
  }
  //放行
  callback()
}
const addFormRules = {
  username: [
    { required: true, message: '请输入用户名称', trigger: 'blur' },
    { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
  ],
  mobile: [
    { required: true, message: '请输入电话', trigger: 'blur' },
    { validator: validMobile, trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { validator: validateEamil, trigger: 'blur' }
  ]
}
</script>

<style lang="scss" scoped></style>
