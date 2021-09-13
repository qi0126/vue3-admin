<template>
  <div>
    {{ data?.data?.a }}
    {{ data?.data?.b }}
  </div>
  <h1 class="animate__animated animate__bounce">动画效果</h1>
  <el-button round class="vibrate-1" type="primary">动画效果</el-button>
  <el-button round class="bounce-top" type="success">动画效果</el-button>
  <el-button round class="animate__animated animate__fadeInUp" type="warning"
    >动画效果</el-button
  >
  <el-button round class="animate__animated animate__shakeY" type="danger"
    >动画效果</el-button
  >
</template>

<script setup>
import { reactive, ref } from 'vue'

const data = reactive({
  data: {
    b: 1
  }
})
</script>

<style lang="scss" scoped>
.test-enter-from,
.test-leave-to {
  opacity: 0;
}

.test-enter-active,
.test-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.bounce-top {
  animation: bounce-top 0.9s both;
}
@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-24px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(0px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}

.vibrate-1 {
  animation: vibrate-1 0.3s linear infinite both;
}
@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
