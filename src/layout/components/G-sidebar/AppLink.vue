<template>
  <!-- 动态组件 -->
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
const isExt = (path) => /^(https?:|mailto:|tel:)/.test(path)

const isExternal = computed(() => isExt(props.to))

// type是一个计算属性
const type = computed(() => {
  if (isExternal.value) {
    return 'a'
  }
  return 'router-link'
})

const linkProps = (to) => {
  if (isExternal.value) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener'
    }
  }
  return { to }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
