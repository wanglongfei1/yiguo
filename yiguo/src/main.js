import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载通用样式main.scss文件  webpack all in js
import "./stylesheets/main.scss"
import axios from "axios"
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 引入 根rem
import "./modules/rem"

import axios from "axios"
Vue.prototype.$http = axios

//引入swiper样式
import "swiper/css/swiper.min.css"

import { Lazyload,InfiniteScroll  } from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);

//引入directive  自定义命令
import "./modules/directive"
//引入swiper样式
import "swiper/css/swiper.min.css"
//
import axios from "axios"
Vue.prototype.$http = axios
//mint-ui
import { Lazyload, InfiniteScroll } from 'mint-ui';
Vue.use(Lazyload);
Vue.use(InfiniteScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
