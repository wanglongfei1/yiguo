import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
//加载通用样式main.scss文件  webpack all in js
import "./stylesheets/main.scss"
Vue.config.productionTip = false
// 引入 根rem
import "./modules/rem"
//引入directive  自定义命令
import "./modules/directive"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
