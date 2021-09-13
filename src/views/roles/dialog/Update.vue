<template>
  <el-dialog
    v-model="isUpdate"
    title="修改角色"
    @close="emit('update:isUpdate', false)"
    ><el-form
      :model="updateForm"
      :rules="updateRoleFormRules"
      ref="updateRoleFormRef"
    >
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="updateForm.roleName" />
      </el-form-item>
      <el-form-item label="角色描述" prop="roleDesc">
        <el-input v-model="updateForm.roleDesc" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="emit('update:isUpdate', false)">取 消</el-button>
      <el-button type="primary" @click="updateRole">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { updateRoles } from '@/api/roles'
import { defineEmit, defineProps, ref } from 'vue'
const props = defineProps({
  isUpdate: {
    type: Boolean,
    defalut: false
  },
  updateForm: {
    type: Object,
    defalut: { id: 0, roleName: '', roleDesc: '' }
  }
})
const emit = defineEmit(['update:isUpdate'])

const updateRoleFormRef = ref(null)
const resetAddForm = () => {
  emit('update:isUpdate', false)
  updateRoleFormRef.value.resetFields()
}
const updateRole = () => {
  updateRoleFormRef.value.validate(async (valid) => {
    if (!valid) {
      return ElMessage.error('请正确填写用户信息')
    }
    await updateRoles(updateForm)
    updateRoleFormRef.value.resetFields()
    //关闭对话框
    emit('update:isUpdate', false)
  })
}
const updateRoleFormRules = {
  roleName: [
    { required: true, message: '请输入角色名称', trigger: 'blur' },
    { min: 3, max: 15, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  roleDesc: [
    { required: true, message: '请输入角色描述', trigger: 'blur' },
    { min: 5, max: 50, message: '长度在 5 到 50 个字符', trigger: 'blur' }
  ]
}
</script>

<style lang="scss" scoped></style>
