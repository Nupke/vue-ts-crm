import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "../layouts/BlankLayout.vue";

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: BasicLayout,
    name: "Root",
    meta: { title: "Root" },
  },
];

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    component: BasicLayout,
    name: "Root",
    meta: {
      title: "Root",
    },
  },
];

export default constantRoutes;
