<template>
  <a-layout class="basicLayout-wrap">
    <h6>Header</h6>

    <a-layout>
      <h6>Sidebar</h6>
      <a-layout class="basicLayout-content">
        <h6>Breadcrumb</h6>

        <a-layout-content>
          <template>
            <router-view v-slot="{ Component, route }">
              <transition name="fade-slide" mode="out-in" appear>
                <div :key="route.name">
                  <component :is="Component" />
                </div>
              </transition>
            </router-view>
          </template>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.basicLayout-wrap {
  height: 100vh;
  overflow: hidden;
  .basicLayout-content {
    height: cals(100vh - 80px);
    overflow-y: auto;
    margin: 0;
    padding: 24px;
    background: "#F0F1F4";
  }
}
</style>
