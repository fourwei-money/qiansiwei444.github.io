import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 1 引入elementUI库
import ElementUI from "element-ui"
// 2 引入css文件
import 'element-ui/lib/theme-chalk/index.css'

import "./assets/index.css"
// 安装elementUI
Vue.use(ElementUI)
Vue.config.productionTip = false;


// 注册一个导航守卫
// router.beforeEach((to, from, next) => {
//  console.log("导航守卫工作了！！")
 
// })
router.beforeEach((to, from, next) => {
  // console.log(to,from)
  if(to.path === "/login"){
    next()
    return
  }

  if(localStorage.getItem("token")){
    next()
  }else{
    router.push("/login")
  }
//  console.log("导航守卫工作了！！")
//  next()
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
