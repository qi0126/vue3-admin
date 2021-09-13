<template>
  <el-dialog title="添加角色" v-model="isAdd" width="50%" @close="resetAddForm">
    <el-form
      :model="addForm"
      :rules="updateRoleFormRules"
      ref="addRoleFormRef"
      label-width="80px"
    >
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="addForm.roleName"></el-input>
      </el-form-item>
      <el-form-item label="角色描述" prop="roleDesc">
        <el-input v-model="addForm.roleDesc"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="emit('update:isAdd', false)">取 消</el-button>
      <el-button type="primary" @click="addRole">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmit, defineProps, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { AddRoles } from '@/api/roles'
const props = defineProps({
  isAdd: {
    type: Boolean,
    defalut: false
  }
})
const emit = defineEmit(['update:isAdd'])
const addForm = reactive({
  roleName: 'dasdas',
  roleDesc: 'dasdass'
})
const addRoleFormRef = ref(null)
const resetAddForm = () => {
  emit('update:isAdd', false)
  addRoleFormRef.value.resetFields()
}
const addRole = () => {
  addRoleFormRef.value.validate(async (valid) => {
    if (!valid) {
      return ElMessage.error('请正确填写用户信息')
    }
    await AddRoles(addForm)
    addRoleFormRef.value.resetFields()
    //关闭对话框
    emit('update:isAdd', false)
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
