import 'whatwg-fetch'
import _ from 'lodash'
import BorrowerModel from '../models/BorrowerModel';

export default {
  name: 'Borrower',
  props: ['service', 'business'],
  data () {
    return {
      loading: false,
      borrower: new BorrowerModel()
    }
  },
  created () {
    this.getBorrowerFromApi();
  },
  methods: {
    getBorrowerFromApi() {
      let self = this;
      self.loading = true;
      this.$props.service.getBorrowerWithId(1)
        .then((borrowerObject) => {
          self.loading = false;
          self.borrower = borrowerObject;
      });
    },
    // Note: Do not use arrow functions because they lack the "this." In other words you will not be able to use "this"
    updateBorrower: _.debounce(function () {
      this.$props.service.updateBorrower(this.borrower, this.$props.business);
    }, 500)
  }
}
