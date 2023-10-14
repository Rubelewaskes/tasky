import { createRouter, createWebHashHistory } from 'vue-router'
import Task from '../views/TaskView.vue'
import Login from '../views/LoginView.vue'
import Main from '../views/TaskS.vue'
import Table from '../views/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/task',
    name: 'task',
    component: Task
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/table',
    name: 'table',
    component: Table
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
