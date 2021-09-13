<template>
  <h1>{{ msg }}</h1>
  <el-button @click="counts">count is: {{ $store.state.couter }}</el-button>
  <el-button @click="onClick">点击事件</el-button>
  <div></div>
  <el-input v-model="state.num"></el-input>
  <p>{{ state.num }}</p>
  <el-input v-model="num"></el-input>
  <p>{{ num }}</p>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import {
  defineProps,
  defineEmit,
  reactive,
  ref,
  watch,
  watchEffect,
  nextTick,
  computed,
  toRefs,
  toRef,
  useContext,
  onCreated,
  onMounted,
  h,
  PropType,
} from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const counts = () => store.commit('add')

const props = defineProps({
  msg: String,
  default: () => ''
})
const emit = defineEmit(['update:msg'])
const onClick = () => {
  emit('update:msg', '修改了!')
  ElMessage.success(props.msg)
}

const state = reactive({ count: 0, num: 1 })
const num = ref('')

watch(num, (v, o) => console.log(v, o))
</script>
