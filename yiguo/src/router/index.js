import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import home from "./home"
import login from "./user"
export default new Router({
  routes: [
    {path:'/',redirect:"home"},
    home,login
    
  ]
})
