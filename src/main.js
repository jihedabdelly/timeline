import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Timeline from './components/TimeLine_demo.vue'
import Rating from './components/Rating.vue'

Vue.config.productionTip = false

const routes = [
  {
    path: '/rating',
    component: Rating
  },
  {
    path: '/timeline',
    component: Timeline,
  }
]

const router = new Router({
  base: '/admin/',
  mode: 'history',
  linkActiveClass: 'is-active', // router-link active样式
  /*
  由于本项目采用内滚动布局，此处代码无效，需要自行hack vue-router获得此能力
  saveScrollPosition: true,
  scrollBehavior (to, from, savedPosition) {
  },
  */
  routes // short for routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
