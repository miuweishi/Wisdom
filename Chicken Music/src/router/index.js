import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/Recommend'
import Singer from '../components/Singer/index.vue'
import Rank from '../components/Rank'
import My from '../components/My'
import Search from '../components/Search'
import Detail from 'components/Detail'
import Ranklist from 'components/Ranklist'
// 路由懒加载
// const Recommend = ()=>import('../components/Recommend')
// const Singer =()=>import('../components/Singer/index.vue')
// const Rank =()=>import('../components/Rank')
// const My =()=>import('../components/My')
// const Detail =()=>import('components/Detail')
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':singermid',
        name: 'detail',
        component: Detail
      }]
    },
    {
      path: '/rank',
      component: Rank,
      children: [{
        path: ':id',
        name: 'ranklist',
        component: Ranklist
      }]
    },
    {
      name: 'd',
      path: '/my',
      component: My
    },
    {
      name: 'search',
      path: '/search',
      component: Search
    },
    {
      path: '/',
      redirect: '/recommend'
    }
  ]
})

export default router
