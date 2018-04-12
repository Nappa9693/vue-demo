import Vue from 'vue'
import Router from 'vue-router'
import Borrower from '@/components/Borrower/Borrower'
import * as BorrowerService from '@/services/BorrowerService'
import * as BorrowerValidation from '@/business/BorrowerValidation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Borrower',
      component: Borrower,
      props: { service: BorrowerService, business: BorrowerValidation }
    }
  ]
})
