export default {
  name: 'FormTextInput',
  props: ['labelText', 'inputValue'],
  data () {
    return {
      value: this.$props.inputValue
    }
  },
  created() {
    this.$emit('update', this.value)
  },
  methods: {
    onChange () {
      this.$emit('update', this.value)
    }
  }
}
