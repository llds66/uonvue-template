import type { RouteRecordRaw } from 'vue-router'

const HomeLayout = () => import('@/layouts/index.vue')

// 定义路由
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeLayout,
    redirect: '/one',
    children: [
      {
        path: 'one',
        component: () => import('@/pages/index.vue'),
      },
    ],
  },
]

export default routes
