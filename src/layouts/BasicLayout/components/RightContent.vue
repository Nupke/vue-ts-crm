<template>
  <div class="sys-setting">
    <a-dropdown placement="bottom">
      <template #overlay>
        <a-menu :selectedKeys="selectedKeys" class="menu-box">
          <a-menu-item
            v-for="item in navs"
            :key="item.path"
            @click="handleRoute(item?.path)"
          >
            <template #icon>
              <Icon align="1px" size="20px" :type="item.icon" />
            </template>
            <span>{{ item.name }}</span>
          </a-menu-item>
          <Space class="wrap" align="baseline" direction="horizontal">
            <Icon align="2px" type="xitongshezhi" />
            <span class="setting">Тест</span>
            <Icon align="2px" type="xialajiantou" />
          </Space>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
import { Space } from "ant-design-vue";
import { useRouter } from "vue-router";
import { ref, watchEffect } from "vue";

import { navs as myNavs } from "./contstant";
const router = useRouter();

const navs = ref(myNavs);
const selectedKeys = ref<string[]>([]);

watchEffect(() => {
  if (router.currentRoute) {
    const matched = router.currentRoute.value.matched.concat();
    selectedKeys.value = matched
      .filter((r) => r.name !== "index")
      .map((r) => r.path);
  }
});

const handleRoute = (path?: string) => {
  if (path) return router.push(path);
  /*  store.logout();*/
};
</script>

<style lang="less" scoped>
.sys-setting {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-right: 16px;
  .wrap {
    height: 55px;

    .setting {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.85);
      margin: 0 8px 0 4px;
    }
  }
  .my-icon {
    font-size: 18px !important;
  }
}
</style>
