import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/user/Login.vue'
import Home from '../views/Home.vue'
import FreeCourses from '../components/free-courses/FreeCourses.vue'
import MainFrame from '../components/main-frame/MainFrame.vue'
import Opportunities from '../components/opportunities/Opportunities.vue'
import Empregador from '../components/empregador/Empregador.vue'
import Profile from '../components/user/Profile.vue'
import Curriculo from '../components/user/Curriculo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        to.query
        return '/login'
      }
    },
    {
      path: '/google-oauth-callback',
      redirect: (to) => {
        localStorage.setItem('token', <string>to.query.token)
        localStorage.setItem('username', <string>to.query.username)
        localStorage.setItem('email', <string>to.query.email)
        localStorage.setItem('profilePictureURL', <string>to.query.profilePictureURL)
        return { path: '/home', query: {} }
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
        },
        {
          path: '/profile',
          name: 'Perfil',
          component: Profile
        },
      ]
    },
    {
      path: '/curriculo',
      name: 'curriculo',
      component: Curriculo
    }
  ]
})

export default router