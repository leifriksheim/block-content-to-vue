<script>

const blocksToHtml = require('@sanity/block-content-to-html')
const h = blocksToHtml.h

export default {
  name: 'default-type',
  props: {
    block: Object,
    serializers: Object
  },
  created() {
    console.log(this.block._type);
  },
  render: function (createElement) {
    const component = this.serializers.types['span'];
    return createElement(this.serializers.types.span, {
      props: {
        fields: this.block
      }
    })
  }
}

</script>
