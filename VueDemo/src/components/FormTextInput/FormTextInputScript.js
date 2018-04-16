export default {
  name: 'FormTextInput',
  props: ['labelText', 'inputValue'],
  data () {
    return {
      value: this.$props.inputValue
    }
  },
  methods: {
    onChange () {
      this.$emit('update', this.value)
    }
  }
}
