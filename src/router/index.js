import { createWebHistory, createRouter } from "vue-router";

/* Views directory */
import Home from '@/views/HomePage.vue'
import TaskList from '@/views/TaskList.vue'
const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/list', 
    component: TaskList 
  },
]


const router = createRouter( {
  history: createWebHistory(),
  routes
}) 

export default router;