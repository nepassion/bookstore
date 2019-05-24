import Home from '@/components/Home'
import Management from '@/components/Management'
import Login from '@/components/Login'
import Registe from '@/components/Registe'
import MenuNav from '@/components/MenuNav'
import About from '@/components/About'

//二级路由
import Contack from '@/components/about/Contack'
import History from '@/components/about/History'
import Delivery from '@/components/about/Delivery'
import Order from '@/components/about/Order'

export const routes=[
    {
      path: "/home",
      components: {
        default: Home,
        "contack": Contack,
        "history": History,
        "delivery": Delivery,
        "order": Order
      }
    },
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: '/about',
      name: "about-menu",
      component: About,
      children: [
        {path: 'contack',name:'contackLink',component: Contack},
        {path: 'history',name:'historyLink',component: History},
        {path: 'order',name:'orderLink',component: Order},
        {path: 'delivery',name:'deliveryLink',component: Delivery}
      ],
      redirect: '/about/contack'
    },
    {
      path: '/menu',
      name: "menu",
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
