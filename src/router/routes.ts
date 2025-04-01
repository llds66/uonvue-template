import type { RouteRecordRaw } from "vue-router";
const HomeLayout = () => import("@/layouts/Home/index.vue");

// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    redirect: "/one",
    children: [
      { path: "one", component: () => import("@/pages/one/index.vue") },
      { path: "tow", component: () => import("@/pages/two/index.vue") },
    ],
  },
];

export default routes;
