import Vue from 'vue'
import Router from 'vue-router'
import Borrower from '@/components/Borrower'
import * as BorrowerService from '../services/BorrowerService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Borrower',
      component: Borrower,
      props: { service: BorrowerService }
    }
  ]
})
