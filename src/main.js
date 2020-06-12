import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

//axios实例，代码、功能较少，没单独写
import axios from 'axios'
Vue.prototype.$http=axios.create({
  baseURL:'http://localhost:3000/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
