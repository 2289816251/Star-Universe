import { createRouter, createWebHistory } from 'vue-router'
import routes from './routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title
  next()
})

export default router
