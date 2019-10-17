import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
<<<<<<< HEAD
import Classify from "./classify"
import Mine from "./mine"
export default new Router({
  routes: [
    {
      name:"home",
    path:"/",
    component:()=>import("@/views/Home")
      
      },
    Classify,
    Mine
=======

import home from "./home"
import login from "./user"
export default new Router({
  routes: [
    {path:'/',redirect:"home"},
    home,login
    
>>>>>>> c15298d18828e52fedea667c9dd560805f67b763
  ]
})
