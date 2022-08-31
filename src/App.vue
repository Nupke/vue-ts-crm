<template>
  <ConfigProvider :locale="enUS">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { ConfigProvider } from "ant-design-vue";
import enUS from "ant-design-vue/es/locale/en_US";
import Home from "./views/home/index.vue";
import { useTitle } from "./hooks/useTitle";

import dayjs from "dayjs";
import "dayjs/locale/en";
dayjs.locale("en");

useTitle();
</script>
