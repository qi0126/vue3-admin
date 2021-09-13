<template>
  <el-dialog
    title="修改用户"
    v-model="updateUserDialogVisible"
    width="50%"
    @close="resetUpdateForm"
  >
    <el-form
      :model="updateForm"
      :rules="FormRules"
      ref="updateFormRef"
      label-width="80px"
    >
      <el-form-item label="用户名">
        <!-- 用户名 -->
        <el-input v-model="updateForm.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <!-- 邮箱 -->
        <el-input v-model="updateForm.email"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <!-- 电话 -->
        <el-input v-model="updateForm.mobile"></el-input>
      </el-form-item>
    </el-form>

    <template #footer>
      <el-button @click="emit('update:updateUserDialogVisible', false)"
        >取 消</el-button
      >
      <el-button type="primary" @click="updateUser">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { updatePutUser } from '@/api/users'
import { defineProps, defineEmit, ref } from 'vue'
import { ElMessage } from 'element-plus'

const props = defineProps({
  updateUserDialogVisible: {
    type: Boolean,
    default: false
  },
  updateForm: {
    type: Object,
    default: { username: '', id: 0, email: '', mobile: '' }
  }
})
const emit = defineEmit(['update:updateUserDialogVisible'])
const updateFormRef = ref(null)

const updateUser = () => {
  updateFormRef.value.validate(async (valid) => {
    if (!valid) {
      return ElMessage.error('请正确填写用户信息')
    }
    await updatePutUser(props.updateForm.id, {
      email: props.updateForm.email,
      mobile: props.updateForm.mobile
    })
    updateFormRef.value.resetFields()
    //关闭对话框
    emit('update:updateUserDialogVisible', false)
  })
}

const resetUpdateForm = () => {
  updateFormRef.value.resetFields()
  emit('update:updateUserDialogVisible', false)
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
const FormRules = {
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
