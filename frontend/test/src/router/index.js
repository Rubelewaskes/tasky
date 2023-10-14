import { createRouter, createWebHashHistory } from 'vue-router'
import Task from '../views/TaskView.vue'

const routes = [
  {
    path: '/',
    name: 'task',
    component: Task
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
