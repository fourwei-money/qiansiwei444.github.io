import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 1 引入elementUI库
import ElementUI from "element-ui"
// 2 引入css文件
import 'element-ui/lib/theme-chalk/index.css'
// 安装elementUI
Vue.use(ElementUI)
import "./assets/index.css"
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
