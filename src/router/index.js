import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import List from '@/components/AllEventList'
import EachList from '@/components/EachEventList'
import Category from '@/components/Category'
import EachMonth from '@/components/EachMonth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/month',
      name: 'Month',
      component: EachMonth
    },
    {
      path: '/list/all',
      name: 'AllList',
      component: List
    },
    {
      path: '/list/:each',
      name: 'EachList',
      component: EachList
    }
  ]
})
