import { reactive } from 'vue'
import { getRoles } from '@/api/roles'

// 列表数据
export const state = reactive({
  loading: true, // 加载状态
  tableList: [], // 列表数据
  isAdd: false, // 新增弹框
  isUpdate: false, // 修改弹框
  updateForm: {} // 修改弹框组件数据
})

// 获得用户列表
export const getList = async () => {
  state.loading = true
  let res = await getRoles()
  if (res) {
    state.tableList = res
  }
  state.loading = false
}

// 表头单元格样式
export const headerCellStyle = {
  backgroundColor: '#1283F8',
  color: '#fff',
  textAlign: 'center'
}
