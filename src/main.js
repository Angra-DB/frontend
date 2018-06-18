import Vue from 'vue'
import VueRouter from 'vue-router'
import vueHljs from "vue-hljs";
//if you want to use default color, import this css file
import "vue-hljs/dist/vue-hljs.min.css";
import routes from './routes'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vueHljs)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

