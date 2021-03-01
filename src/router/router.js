// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from '../ui/index.vue'
import Index2 from '../ui/index2.vue'
import Index3 from '../ui/index3.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: Index },
      { path: '/index2', component: Index2 },
      { path: '/index3', component: Index3 }
    ]
  })
}
