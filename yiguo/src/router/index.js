import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Classify from "./classify"
import Mine from "./mine"
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    Classify,
    Mine
  ]
})
