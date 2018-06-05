import Vue from 'vue'
import App from './App.vue'
import Login from './pages/Login.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Login)
}).$mount('#app')
