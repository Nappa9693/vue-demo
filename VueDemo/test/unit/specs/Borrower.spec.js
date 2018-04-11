import Vue from 'vue'
import Borrower from '@/components/Borrower'
import * as MockBorrowerService from '../mocks/MockBorrowerService';

describe('Borrower.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Borrower)
    const vm = new Constructor({propsData: {service: MockBorrowerService}}).$mount()
    expect(vm.$el.querySelector('.borrower-form h1').textContent)
      .toEqual('Borrower Info')
  })
})
