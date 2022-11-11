import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/HomePage.vue'
import About from '@/views/TaskView.vue'
import TaskList from '@/views/TaskList.vue'
const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/task', 
    component: About 
  },
  { 
    path: '/list', 
    component: TaskList 
  },
  // { path: '/about', component: About },
]
const router = createRouter( {
  history: createWebHistory(),
  routes
  // routes : [
  //   { path: '/',  name: 'Home', component: }
  // ]
}) 


export default router;