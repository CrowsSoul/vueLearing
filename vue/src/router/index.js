import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElementView from "@/views/ElementView.vue";
import Teacher1 from "@/views/Teacher1.vue";
import Teacher2 from "@/views/Teacher2.vue";
import Teacher3 from "@/views/Teacher3.vue";
import TeacherView from "@/views/TeacherView.vue";
import PersonnelView from "@/views/PersonnelView.vue";
import Personnel1 from "@/views/Personnel1.vue";
import Personnel2 from "@/views/Personnel2.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Element',
    name: 'Element',
    component: ElementView
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: TeacherView
  },
  {
    path: '/Teacher/1',
    name: 'Teacher1',
    component: Teacher1
  },
  {
    path: '/Teacher/2',
    name: 'Teacher2',
    component: Teacher2
  },
  {
    path: '/Teacher/3',
    name: 'Teacher3',
    component: Teacher3
  },
  {
    path: '/Personnel',
    name: 'Personnel',
    component: PersonnelView
  },
  {
    path: '/Personnel/1',
    name: 'Personnel1',
    component: Personnel1
  },
  {
    path: '/Personnel/2',
    name: 'Personnel2',
    component: Personnel2
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
