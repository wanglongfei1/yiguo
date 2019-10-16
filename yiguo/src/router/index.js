import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
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
  ]
})
