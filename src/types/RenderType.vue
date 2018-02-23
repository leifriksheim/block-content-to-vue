<script>

import Block from './Block.vue';

export default {
  name: 'default-type',
  props: {
    block: Object,
    isCustomType: Boolean,
    styling: String,
    markDefs: Array,
    serializers: Object
  },
  render: function (h) {
    const styling = this.styling;
    const stylingTag = styling === 'normal' ? 'span' : styling;

    return h(stylingTag, {}, [this.renderMark(h)]);
  },
  methods: {
    renderMark(h) {
      const marks = this.markDefs;
      const renderType = this.isCustomType ?
                         this.renderCustomType(h) :
                         this.renderDefaultType(h);

      if (marks.length) {

        // TODO: Loop through all markDefs and render them recursively

        const mark = marks[0];
        const markType = mark._type === 'link' ? 'a' : 'span';
        return h('a', {
          attrs: {
            href: mark.href
          }
        }, [renderType]);

      }
      return renderType;
    },
    renderDefaultType(h) {
      const block = this.block;
      return h(block._type, block.text)
    },
    renderCustomType(h) {
      const component = this.serializers.types[this.block._type];
      return createElement(component, {
        props: {
          fields: this.block
        }
      });
    }
  }
}

</script>
