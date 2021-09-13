<template>
  <div class="container mx-auto px-2 bg-yellow-200">
    <h1 class="box-border h-16 mb-2 w-5 p-0.5 border-4 text-red-400 bg-red-200">dasda</h1>
  </div>
  <input
    class="border-solid border-blue-300 border rounded-md pl-4 h-8 text-purple-600 placeholder-red-300"
    placeholder="请输入文字"
    ref="input"
    v-model="msg"
  />
  <h1 class="text-purple-600">dsaasdasdas</h1>
  <n-button @click="onClick(0)" :type="isAll ? 'success' : ''">全部</n-button>
  <n-button @click="onClick(1)" :type="include(1) ? 'success' : ''">dasda</n-button>
  <n-button @click="onClick(2)" :type="include(2) ? 'success' : ''">dasda</n-button>
  <n-button @click="onClick(3)" :type="include(3) ? 'success' : ''">dasda</n-button>
  <n-button @click="onClick(4)" :type="include(4) ? 'success' : ''">dasda</n-button>

  <MyLensBtn></MyLensBtn>
</template>

<script setup>
import { computed, nextTick, ref, watchEffect } from 'vue'
import MyLensBtn from '@/components/My-lensBtn.vue'
let isAll = ref(true)
const arr = ref(new Set())

const onClick = (index) => {
  if (!index) {
    isAll.value = true
    arr.value.forEach(item => arr.value.delete(item))
  } else {
    isAll.value = false
    if (isAll.value) return
    if (arr.value.has(index)) {
      if (arr.value.size === 1) return
      arr.value.delete(index)
    } else {
      arr.value.add(index)
    }
  }
}

const include = (index) => arr.value.has(index)




const msg = ref('')
const input = ref(null)
nextTick(() => {
  // console.log(input);
  // console.log(input.value.className);
  // input.value.className += ' active'
})
</script>


<style lang="scss" scoped>
.active {
  color: red;
}
</style>