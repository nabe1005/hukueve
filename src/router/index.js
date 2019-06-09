import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import List from '@/components/AllEventList'
import EachList from '@/components/EachEventList'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  base: process.env.ROOT_BASE,
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
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
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    }
  ]
})
