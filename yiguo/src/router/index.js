import Vue from 'vue'
import Router from 'vue-router'
import Eat from './eat'
import Classify from './classify'
import textdetail from './textdetail'
import good from './good'

import home from "./home"
import login from "./user"
Vue.use(Router)
import All from "./all"
import Car from "./car"


import Mine from "./mine"
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    home,Mine,Classify,good,Eat

  ]
})
