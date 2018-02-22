<script>
export default {
  name: 'custom-type',
  props: {
    block: Object,
    serializers: Object
  },
  render: function (createElement) {
    const component = this.serializers.types[this.block._type];
    return createElement(component, {
      props: {
        fields: this.block
      }
    })
  }
}
</script>
