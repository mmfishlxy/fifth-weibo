// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入vuex的包
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
  state : {

  },
  mutations : {

  },
  getters : {

  }
})
import App from './App'
// import router from './router'
// 导入Mint-ui包 需要使用Mint-ui中的懒加载图标的把其全局导入
import Mint from 'mint-ui'
Vue.use(Mint)
// 导入Mint中的样式
import 'mint-ui/lib/style.css'
// 导入MUI的样式
import '../static/mui/css/mui.css'
// 导入MUI中拓展字体的图标样式
import '../static/mui/css/icons-extra.css'
// 导入v-router包
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己路由组件匹配文件
import router from './router/index.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root='http://192.168.0.100:8080'
//全局设置发送的表单数据的格式
Vue.http.options.emulateJSON = true
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 挂载App的根组件
  render: c => c(App),
  // 挂载自己的router
  router,
  store
})
