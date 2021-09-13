<!-- login模板 -->
<template>
  <div class="login">
    <!-- form表单 -->
    <div class="form-wrap">
      <!-- logo图片 -->
      <div class="logo-wrap">
        <img src="@/assets/logo.png" alt />
      </div>
      <!-- 登录表单 -->
      <el-form
        :model="loginFormModel"
        :rules="loginFormRules"
        ref="loginFormRef"
        label-width="90px"
        class="login-form"
      >
        <el-form-item label="用户：" prop="username">
          <el-input v-model="loginFormModel.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            type="password"
            v-model="loginFormModel.password"
            prefix-icon="iconfont icon-3702mima"
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submit">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, nextTick } from 'vue'
import { login } from '@/api/login'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { setToken } from '@/utils/auth'
import { useStore } from 'vuex'

const loginFormModel = reactive({
  username: 'admin',
  password: '123456'
})
const loginFormRef = ref(null)
const router = useRouter()
let loginFormRules = {
  username: [
    { required: true, message: '请输入用户名称', trigger: 'blur' },
    { min: 2, max: 15, message: '长度在 2 到 15 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入用户密码', trigger: 'blur' },
    { min: 6, max: 12, message: '密码长度在 6 到 12 个字符', trigger: 'blur' }
  ]
}

const store = useStore()

const submit = () => {
  loginFormRef.value.validate(async (valid) => {
    if (!valid) {
      return ElMessage.error('错误的用户名或密码')
    }
    let res = await login({ ...loginFormModel })
    // console.log(res)
    if (res) {
      setToken(res.token)
      store.commit('user/M_SET_USER', res)
      store.commit('user/M_SET_TOKEN', res.token)
      store.commit('user/M_SET_USERNAME', res.username)
      router.replace('/home')
    }
  })
}

const resetForm = () => {
  nextTick(() => loginFormRef.value.resetFields())
}
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #2c3e50;
  .login-form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .form-wrap {
    background-color: #ffffff;
    width: 500px;
    height: 320px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .logo-wrap {
      background-color: #ffffff;
      border: 1px solid #dbdbdb;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 10px;
      img {
        width: 100px;
        background-color: #5f9ea0;
        border-radius: 50%;
      }
    }

    .el-form {
      bottom: 0;
      position: absolute;
      width: 100%;
      left: 0;
      .btns {
        text-align: center;
      }
    }
  }
}
</style>
