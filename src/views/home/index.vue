<template>
  <div>
    <!-- search -->
    <a-card>
      <a-input-search size="large" class="search" placeholder="search">
        <template #enterButton>
          <a-button
            style="width: 100px; height: 48px"
            class="search_btn"
            type="primary"
          >
            <img :src="IconSearch" alt="" />
          </a-button>
        </template>
      </a-input-search>
    </a-card>
    <a-divider class="line" />

    <!-- chart -->
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card :bordered="false">
          <h1>DataOverview</h1>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card :bordered="false">
          <h1>Trading History</h1>
        </a-card>
      </a-col>
    </a-row>
    <a-divider class="line" />
  </div>
</template>

<script setup lang="ts">
import IconSearch from "../../assets/images/Icon _Search.png";
import DataOverview from "./components/DataOverview.vue";
import { columns } from "./constant";

console.log("homepage");
</script>

<style lang="less" scoped>
.search {
  & :deep(.ant-input) {
    height: 48px;
  }
}
</style>
