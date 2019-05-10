import Home from '@/components/Home'
import Management from '@/components/Management'
import Login from '@/components/Login'
import Registe from '@/components/Registe'
import MenuNav from '@/components/MenuNav'
import About from '@/components/About'

export const routes=[
    {
      path: "/home",
      component: Home
    },
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: '/about',
      name: "about",
      component: About
    },
    {
      path: '/menuNav',
      name: "menuNav",
      component: MenuNav
    },
    {
      path: '/management',
      name: "management",
      component: Management
    },
    {
      path: '/login',
      name: "login",
      component: Login
    },
    {
      path: '/registe',
      name: "registe",
      component: Registe
    } 
  ]
