import 'whatwg-fetch'
import BorrowerModel from '../models/BorrowerModel';
import * as BorrowerService from '../services/BorrowerService';

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
      BorrowerService.getBorrowerWithId(1)
        .then((borrowerObject) => {
          self.loading = false;
          self.borrower = borrowerObject;
      });
    }
  }
}
