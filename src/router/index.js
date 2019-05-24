import Vue from 'vue'
import Router from 'vue-router'
import {routes} from './routes'
Vue.use(Router)

export default new Router({
  routes: routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
    // return {x:0,y:400}
    // return {selector: '.el-button'};
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0};
    }
  }
})
