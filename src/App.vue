<template>
  <!-- antd中文 -->
  <a-config-provider :locale="locale">
    <n-config-provider
      :theme="darkTheme"
      :locale="zhCN"
      :date-locale="dateZhCN"
    >
      <Router-view />
    </n-config-provider>
  </a-config-provider>
</template>
<script>
// antd中文设置
import antdZhCN from "ant-design-vue/es/locale/zh_CN";
// naive中文设置,实际需要按需加载,在需要使用的地方使用
import { zhCN, dateZhCN } from "naive-ui";

export default {
  data() {
    return {
      // antd中文设置
      locale: antdZhCN,
    };
  },
  setup() {
    return {
      zhCN,
      dateZhCN,
    };
  },
};
</script>