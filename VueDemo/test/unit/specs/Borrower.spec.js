import Vue from 'vue'
import Borrower from '@/components/Borrower'
import * as MockBorrowerService from '../mocks/MockBorrowerService';
import * as BorrowerValidation from '../../../src/business/BorrowerValidation';

describe('Borrower.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Borrower)
    const vm = new Constructor({
      propsData: {
        service: MockBorrowerService,
        business: BorrowerValidation
      }
    }).$mount()
    expect(vm.$el.querySelector('.borrower-form h1').textContent)
      .toEqual('Borrower Info')
  })
})
