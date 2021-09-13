<template>
  <el-header height="50px" ref="header">
    <div class="left">
      <img src="@/assets/logo.png" alt />
      <h2 class="bounce-top">vue3+vite</h2>
    </div>
    <div class="right">
      <el-color-picker v-model="color" @change="colorChange" size="mini" class="mr-3"></el-color-picker>
      <div>欢迎您,{{ getAuth }} 宝宝!</div>
      <el-button type="primary" @click="logout" size="small">退出</el-button>
    </div>
  </el-header>
</template>

<script setup>
import { useStore } from 'vuex'
import { removeToken } from '@/utils/auth'
import { useRouter } from 'vue-router'
import { nextTick, ref } from 'vue'

const getAuth = useStore().getters.username
const router = useRouter()

const logout = () => {
  removeToken()
  router.push('/login')
}

const color = ref(null)

const header = ref(null)

nextTick(() => {
  // console.log(header.value.$el)
})
const colorChange = (v) => {
  // 获取dom元素
  header.value.$el.style.setProperty('--test', v);
}
</script>

<style lang="scss" scoped>
.tracking-enter-from,
.tracking-leave-to {
  letter-spacing: -0.5em;
  opacity: 0;
}

$themeColor: var(--test, #304156);

.el-header {
  background-color: $themeColor;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      margin-right: 20px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    .el-button {
      margin-left: 20px;
    }
  }
}

.bounce-top {
  animation: bounce-top 0.9s both;
  color: #fff;
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
</style>
