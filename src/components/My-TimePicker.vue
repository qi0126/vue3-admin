<template>
  <el-date-picker
    v-model="times"
    type="daterange"
    range-separator="/"
    start-placeholder="开始"
    end-placeholder="结束"
    @change="valueChange"
  >
  </el-date-picker>
  <!-- year/month/date/week/datetime/datetimerange/daterange -->
</template>

<script setup>
import { defineEmit, defineProps } from 'vue'

const props = defineProps({
  times: {
    type: Array,
    default: []
  },
  start: {
    type: String,
    default: ''
  },
  end: {
    type: String,
    default: ''
  }
})

const emit = defineEmit(['update:times', 'update:start', 'update:end'])

const valueChange = (v) => {
  if (!v) {
    emit('update:times', v)
    emit('update:start', '')
    emit('update:end', '')
    return
  }
  emit('update:times', v)
  emit('update:start', format(v[0]))
  emit('update:end', format(v[1]))
}

const format = (date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(
    date.getDate() + ''
  ).padStart(2, '0')}`
</script>

<style lang="scss" scoped></style>
