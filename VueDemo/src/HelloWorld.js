import 'whatwg-fetch'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      value1: '',
      value2: ''
    }
  },
  methods: {
    loadValuesFromApi() {
      fetch('/api/values')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.value1 = json[0];
          this.value2 = json[1];
        });
    }
  }
}
