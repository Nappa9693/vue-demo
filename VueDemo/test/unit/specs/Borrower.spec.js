import Vue from 'vue'
import Borrower from '@/components/Borrower'

describe('Borrower.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Borrower)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.borrower-form h1').textContent)
      .toEqual('Borrower Info')
  })
})
