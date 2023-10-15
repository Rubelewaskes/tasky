import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/MainView.vue'
import Login from '../views/LoginView.vue'
import Leaders from '../views/TableLeader.vue'
import CreateTask from '../views/CreateTaskView.vue'
import userTask from '../views/UserTasksView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/createtask',
    name: 'task',
    component: CreateTask
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/leaders',
    name: 'leaders',
    component: Leaders
  },
  {
    path: '/userTasks',
    name: 'userTasks',
    component: userTask
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
