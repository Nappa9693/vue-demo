import 'whatwg-fetch'
import _ from 'lodash'
import BorrowerModel from '../../models/BorrowerModel';
import FormTextInput from '../FormTextInput/FormTextInput';

const updateBorrowerHandler = _.debounce((componentContext) => {
  if (componentContext === null || typeof componentContext === 'undefined') {
    return
  }

  let borrowerService = componentContext.$customServiceProvider.getBorrowerService()
  let result = borrowerService.updateBorrower(componentContext.borrower)

  if (result === null) {
    componentContext.submissionResult = 'Submission succeeded. You get a cookie!'
  } else {
    componentContext.submissionResult = 'Your not quite done yet...'
  }
}, 500);

export default {
  name: 'Borrower',
  components: {FormTextInput},
  data () {
    return {
      loading: false,
      borrower: new BorrowerModel()
    }
  },
  created () {
    this.getBorrowerFromApi()
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
    updateBorrower() {
      updateBorrowerHandler(this)
    },
    updateBorrowerHomePhone(homePhone) {
      this.borrower.homePhone = homePhone
      updateBorrowerHandler(this)
    }
  }
}
