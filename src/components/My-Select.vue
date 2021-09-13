<template>
  <el-select
    v-model="text"
    placeholder="请选择"
    clearable
    :filterable="isFilter"
    @change="valueChange"
    @clear="onClear"
  >
    <el-option
      v-for="item in opt"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script setup>
import { defineEmit, defineProps } from 'vue'
/**
 * opt    需要[{label:'',value:''}]格式
 * value  需要双向绑定
 * label  返回相匹配的label属性 需要双向绑定
 * isFilter  过滤属性开关,默认为开
 */
const props = defineProps({
  opt: {
    type: Array,
    default: []
  },
  text: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    default: ''
  },
  isFilter: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmit(['update:code', 'update:text'])

const valueChange = (value) => {
  if (!value) return
  let [{ label }] = props.opt.filter((i) => value == i.value)
  emit('update:code', label)
  emit('update:text', value)
}

const onClear = () => emit('update:text', props.text)
</script>

<style lang="scss" scoped></style>
