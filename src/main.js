// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Axios from 'axios'
import VueAxios from 'vue-axios'


import flexible from './assets/js/flexible.js'
import dplus from './assets/js/dplus.js'
import clipboard from './assets/js/clipboard.js'
// import copy2clipboard from './assets/js/copy2clipboard.js'

import './assets/scss/base.css'

Vue.use(VueAxios,Axios)
Vue.use(MintUI)

// basePath
// var instance = Axios.create({
//   baseURL: 'http://172.16.0.200:180',
// });

// 网页标题指令
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  },
  ifUpdate:true
})

// http response 拦截器
Axios.interceptors.response.use(
	response => {
	    return response;
	},
	error => {
	    if (error.response) {
	        switch (error.response.status) {
	            case 401:
	                // 返回 401 清除token信息并跳转到登录页面
	                store.commit(types.LOGOUT);
	                router.replace({
	                    path: 'login',
	                    query: {redirect: router.currentRoute.fullPath}
	                })
	        }
	    }
	    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
});

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
