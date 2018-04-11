import 'whatwg-fetch'
import BorrowerModel from '../models/BorrowerModel';

export default {
  name: 'Borrower',
  props: ['service'],
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
    }
  }
}
