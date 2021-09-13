<template>
  <div class="box">
    <div>当前页:{{ paginationOption.current_page }}</div>
    <div>一页:{{ paginationOption.page_size }} 条</div>
    <div>总条数:{{ paginationOption.total }}</div>
  </div>
  <MyPagination
    v-model:current_page="paginationOption.current_page"
    v-model:page_size="paginationOption.page_size"
    :total="paginationOption.total"
    :small="true"
    :hide_page="true"
    @size-change="sizeChange"
  />
</template>

<script setup>
import MyPagination from '@/components/My-pagination.vue'
import { reactive, watch } from 'vue'
import request from '@/utils/request'
//分页的请求参数
const tableList = reactive({ pagenum: 1, pagesize: 10 })
//分页设置
const paginationOption = reactive({
  page_size: 10,
  total: null,
  current_page: 1
})

const getList = async () => {
  // 请求参数
  let form = null
  // 合并对象,携带分页参数
  let opt = { ...tableList, ...form }
  // 发起请求
  let res = await request({
    url: 'goods',
    method: 'get',
    params: opt
  })
  // 分页数据变动
  // paginationOption.page_size = parseInt(res.page_size)
  paginationOption.total = parseInt(res.total)
  paginationOption.current_page = parseInt(res.pagenum)
}
getList()

const sizeChange = (v) => {
  paginationOption.page_size = v
  getList()
}

watch(
  () => paginationOption.current_page,
  (v) => {
    if (!isNaN(v)) {
      tableList.pagenum = v
      getList()
    }
  }
)
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-around;
}
</style>
