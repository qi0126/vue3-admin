<template>
  <div class="breadcrumb">
    <i class="el-icon-s-fold" @click="collapse"></i>
    <!-- 面包屑 -->
    <el-breadcrumb
      class="app-breadcrumb"
      separator="/"
      separator-class="el-icon-arrow-right"
    >
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
          <span
            v-if="
              item.redirect === 'noRedirect' || index == levelList.length - 1
            "
            class="no-redirect"
            >{{ item.meta.title }}</span
          >
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script setup>
// 解析路由中的参数
import { compile } from 'path-to-regexp'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()

const collapse = (v) => store.commit('sidebar/M_COLLAPSE')

// 路由数据
const levelList = ref(null)
// 全局路由对象
const router = useRouter()
// 当前路由
const route = useRoute()
// 解析路由匹配数组
const getBreadcrumb = () => {
  // 留下只有title的路由
  let matched = route.matched.filter((item) => item.meta && item.meta.title)

  // 添加一级面包屑
  matched = [{ path: '/home', meta: { title: 'HOME' } }].concat(matched)

  // 拼出最终需要展现的跳转数据
  levelList.value = matched.filter(
    (item) => item.meta && item.meta.title && item.meta.breadcrumb !== false
  )
}

// 手动解析path中可能存在的一些参数
const pathCompile = (path) => {
  let toPath = compile(path)
  return toPath(route.params)
}

// 跳转链接
const handleLink = (item) => {
  const { redirect, path } = item
  if (redirect) {
    router.push(redirect)
    return
  }
  router.push(pathCompile(path))
}
// 首次调用
getBreadcrumb()
// 监控route的变化
watch(route, getBreadcrumb)
</script>

<style lang="scss" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  margin-left: 10px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

.breadcrumb {
  display: flex;
  align-items: center;
  .el-icon-s-fold {
    font-size: 30px;
    color: #409eff;
  }
}

// // 开始

// 切换效果 切换显示时
.breadcrumb-enter-active {
  // reverse 反向动画
  animation: blur-out-contract-bck 0.6s reverse;
}

// 切换消失时
.breadcrumb-leave-active {
  animation: blur-out-contract-bck 0.6s;
}

@keyframes blur-out-contract-bck {
  0% {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-filter: blur(0.01);
    filter: blur(0.01);
  }
  100% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-500px);
    transform: translateZ(-500px);
    -webkit-filter: blur(12px) opacity(0%);
    filter: blur(12px) opacity(0%);
  }
}
</style>
