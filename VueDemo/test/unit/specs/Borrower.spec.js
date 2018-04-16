import Vue from 'vue'
import Borrower from '@/components/Borrower/Borrower'
import * as MockServiceProvider from '../mocks/MockServiceProvider'

describe('Borrower.vue', () => {
  it('should render correct contents', () => {
    Vue.prototype.$customServiceProvider = MockServiceProvider
    const Constructor = Vue.extend(Borrower)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.borrower-form h1').textContent)
      .toEqual('Borrower Info')
  })
})
