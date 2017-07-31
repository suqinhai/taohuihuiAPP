import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 首页
    {
      path: '/index',
      name: 'index',
      component:function (resolve) {
          require(['@/views/index/index'], resolve)
      }
    },
    {
      path: '/',
      name: 'index',
      component: function (resolve) {
          require(['@/views/index/index'], resolve)
      }
    },


    // 分类页
    {
      path: '/classPage',
      name: 'classPage',
      component: function (resolve) {
          require(['@/views/classPage/classPage'], resolve)
      }
    },

    // 搜索页
    {
      path: '/searchPage',
      name: 'searchPage',
      component: function (resolve) {
          require(['@/views/classPage/searchPage'], resolve)
      }
    },

    // 详情页
    {
      path: '/details',
      name: 'details',
      component: function (resolve) {
          require(['@/views/details/details'], resolve)
      }
    },

    
    // 错误页面
    {
      path: '/error',
      name: 'error',
      component: function (resolve) {
          require(['@/views/common/error'], resolve)
      }
    },
    {
      path: '*',
      name: 'error',
      component:  function (resolve) {
          require(['@/views/common/error'], resolve)
      }
    },
  ]
})
