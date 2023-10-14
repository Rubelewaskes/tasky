import { createRouter, createWebHashHistory } from 'vue-router'
import Task from '../views/TaskView.vue'
import Login from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'task',
    component: Task
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
