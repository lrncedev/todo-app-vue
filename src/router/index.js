import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/HomePage.vue'
import About from '@/views/TaskView.vue'
const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/task', 
    component: About 
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