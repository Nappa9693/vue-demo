import 'whatwg-fetch'
import _ from 'lodash'
import BorrowerModel from '../../models/BorrowerModel';

export default {
  name: 'Borrower',
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

      let borrowerService = this.$customServiceProvider.getBorrowerService()
      borrowerService.getBorrowerWithId(1)
        .then((borrowerObject) => {
          self.loading = false;
          self.borrower = borrowerObject;
      });
    },
    // Note: Do not use arrow functions because they lack the "this." In other words you will not be able to use "this"
    updateBorrower: _.debounce(function () {
      let borrowerService = this.$customServiceProvider.getBorrowerService()
      let result = borrowerService.updateBorrower(this.borrower, this.$props.business)

      if (result === null) {
        this.submissionResult = 'Submission succeeded. You get a cookie!'
      } else {
        this.submissionResult = 'Your not quite done yet...'
      }
    }, 500)
  }
}
