import type { RouteRecordRaw } from "vue-router";
import BasicLayout from "../layouts/BasicLayout/index.vue";

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/app",
    component: BasicLayout,
    name: "Root",
    meta: { title: "Root" },
  },
];

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Root",
    redirect: '/home',
    component: BasicLayout,
    meta: {
      title: "Root",
    },
    children: [
      {
        path: "/home",
        component: () => import("../components/HelloWorld.vue"),
        name: 'home',
      },
    ],
  },
];

export default constantRoutes;
