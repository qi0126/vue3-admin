<template>
  <el-pagination
    class="pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="current_page"
    :page-sizes="[10, 50, 100, 200]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    prev-text="上一页"
    next-text="下一页"
    :small="small"
    :hide-on-single-page="hide_page"
  >
  </el-pagination>
</template>

<script setup>
import { defineProps, defineEmit } from 'vue'

const props = defineProps({
  current_page: {
    type: Number,
    default: 1
  },
  page_size: {
    type: Number,
    default: 10
  },
  total: {
    type: Number,
    default: 0
  },
  small: {
    type: Boolean,
    default: false
  },
  hide_page: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmit(['update:page_size', 'update:current_page'])
const handleSizeChange = (val) => {
  // console.log(`每页 ${val} 条`)
  emit('update:page_size', val)
}
const handleCurrentChange = (val) => {
  // console.log(`当前页: ${val}`)
  emit('update:current_page', val)
}
</script>

<style lang="scss" scoped>
.pagination {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
