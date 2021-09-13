<template>
  <el-button type="primary" @click="isAdd = true">添加角色</el-button>
  <div style="margin:20px"></div>
  <el-table
    :data="tableList"
    style="width: 100%"
    border
    v-loading="loading"
    :header-cell-style="headerCellStyle"
  >
    <!-- 展开列 -->
    <el-table-column type="expand" label="展开" width="80">
      <template #defalut="scope">
        <el-row
          :class="['bd-bottom', 'expand-row', index1 === 0 ? 'bd-top' : '']"
          v-for="(item1, index1) in scope.row.children"
          :key="index1"
        >
          <!-- 一级权限 -->
          <el-col :span="4">
            <el-tag closable @close="delRightOfRole(scope.row, item1.id)">{{
              item1.authName
            }}</el-tag>
            <i class="el-icon-caret-right"></i>
          </el-col>
          <el-col :span="20">
            <el-row
              v-for="(item2, index2) in item1.children"
              :key="index2"
              :class="[index2 !== 0 ? 'bd-top' : '', 'expand-row']"
            >
              <!-- 二级权限 -->
              <el-col :span="6">
                <el-tag
                  closable
                  type="success"
                  @close="delRightOfRole(scope.row, item2.id)"
                  >{{ item2.authName }}</el-tag
                >
                <i class="el-icon-caret-right"></i>
              </el-col>
              <el-col :span="18">
                <!-- 三级权限 -->
                <el-tag
                  @close="delRightOfRole(scope.row, item3.id)"
                  closable
                  :key="index3"
                  type="warning"
                  v-for="(item3, index3) in item2.children"
                  >{{ item3.authName }}</el-tag
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </template>
    </el-table-column>
    <!-- 序号 -->
    <el-table-column type="index" label="序号" width="80" align="center" />
    <!-- 角色名称 -->
    <el-table-column prop="roleName" label="角色名称" align="center" />
    <!-- 角色描述 -->
    <el-table-column prop="roleDesc" label="角色描述" align="center" />
    <!-- 操作 -->
    <el-table-column label="操作" align="center">
      <template v-slot="scope">
        <el-button
          type="primary"
          size="mini"
          icon="el-icon-edit"
          @click="showUpdateDialog(scope.row)"
          >修改</el-button
        >
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          @click="delRole(scope.row)"
          >删除</el-button
        >
        <el-button
          type="warning"
          size="mini"
          icon="el-icon-setting"
          @click="showGrantRightsDialog(scope.row)"
          >分配权限</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <Add v-model:isAdd="isAdd" />
  <Update v-model:isUpdate="isUpdate" :updateForm="updateForm" />
</template>

<script>
import { state, getList, headerCellStyle } from './model'
import { toRefs } from 'vue'
import Add from './dialog/Add.vue'
import Update from './dialog/Update.vue'
import { isDelConfirmBox } from '@/utils/messageBox.js'
import { delRoles } from '@/api/roles'

export default {
  components: { Add, Update },
  setup() {
    getList()
    const showUpdateDialog = (form) => {
      state.updateForm = form
      state.isUpdate = true
    }

    const delRole = async (role) => {
      let flag = await isDelConfirmBox()
      if (flag) {
        await delRoles(role.id)
        getList()
      }
    }
    return {
      ...toRefs(state),
      getList,
      headerCellStyle,
      showUpdateDialog,
      delRole
    }
  },
  watch: {
    isAdd(v) {
      if (!v) {
        this.getList()
      }
    },
    isUpdate(v) {
      if (!v) {
        this.getList()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.bd-top {
  border-top: 1px solid #ddd;
}
.bd-bottom {
  border-bottom: 1px solid #ddd;
}
.expand-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.el-tag {
  margin: 10px 10px 10px 0;
}
</style>
