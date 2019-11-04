import Vue from 'vue'
import Router from 'vue-router'
import Eat from './eat'
import Classify from './classify'
import textdetail from './textdetail'
import good from './good'
import home from "./home"

import all from "./all"
import car from "./car"
import login from "./login"
import logup from "./logup"

Vue.use(Router)



import Mine from "./mine"
export default new Router({
 

  routes: [
    {path:'/', redirect:'home'},
     home,Mine,Classify,good,Eat,all,textdetail,car,login,logup

  ]
})
