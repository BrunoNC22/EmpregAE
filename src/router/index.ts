import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Home from '../views/Home.vue'
import FreeCourses from '../components/free-courses/FreeCourses.vue'
import MainFrame from '../components/main-frame/MainFrame.vue'
import Opportunities from '../components/opportunities/Opportunities.vue'
import Empregador from '../components/empregador/Empregador.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        return '/login'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '',
      redirect: (to) => '/login',
      component: MainFrame,
      children: [
        {
          path: "/cursos",
          name: "Cursos",
          component: FreeCourses
        },
        {
          path: "/oportunidades",
          name: "Oportunidades",
          component: Opportunities
        },
        {
          path: "/empregador",
          name: "Empregador",
          component: Empregador
        }
      ]
    },
  ]
})

export default router