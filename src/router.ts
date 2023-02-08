import { createRouter, createWebHistory } from "vue-router"
import AppVue from "./App.vue"

const routes = [{ path: "/", component: AppVue }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
