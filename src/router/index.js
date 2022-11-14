import { createWebHistory, createRouter } from "vue-router";

/* Views directory */
import Home from '@/views/HomePage.vue';
import TaskList from '@/views/TaskList.vue';

/* Nested Children Components */
import TaskView from '@/components/TaskView.vue';
import AccomplishedTask from '@/components/AccomplishedTask.vue';
import ImportantTask from '@/components/ImportantTask.vue';
const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/task', 
    name: 'TaskView',
    component: TaskList,
    children: [
      { path: '', name: 'NewTask', component: TaskView },
      { path: '/important', name: 'ImportantTask', component: ImportantTask },
      { path: '/accomplished', name: 'AccomplishedTask', component: AccomplishedTask }
    ],
  },
  // { 
  //   path: '/important', 
  //   component: TaskList,
  //   children: [
  //     { path: '', name: '', component: ImportantTask },
  //     // { path: 'test', name: 'Home', component: Home}
  //   ],
  // },
]

const router = createRouter( {
  history: createWebHistory(),
  routes
}) 

export default router;