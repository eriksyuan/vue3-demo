import { createRouter, createWebHistory } from "vue-router"
// there is also createWebHashHistory and createMemoryHistory

import Relative from "./components/Relative.vue"
import Mouse from './components/Mouse.vue'
import Home from "./home.vue"
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: Home,
    children: [{ path: "/relative", component: Relative },{path:'/mouse',component:Mouse}],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes,
})
