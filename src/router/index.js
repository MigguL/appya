import Vue from 'vue'
import Router from 'vue-router'
import AppYa from '@/components/AppYa'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppYa',
      component: AppYa
    }
  ]
})
