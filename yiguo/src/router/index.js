import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import All from "./all"
import Car from "./car"

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   All,Car
  ]
})
