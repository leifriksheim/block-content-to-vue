<template>
  <div>
    <template v-for="block in reducedBlocks">
      <Block v-if="block._type === 'block'" v-bind="block" :serializers="serializers" :key="block._key" />
      <component v-else :is="serializers.types[block._type]" v-bind="block" :key="block._key"></component>
    </template>
  </div>
</template>

<script>

import Block from './types/Block.vue';

export default {
  name: 'block-content',
  props: {
    blocks: Array,
    serializers: Object,
  },
  components: {Block},
  computed: {
    reducedBlocks() {
      // Change "style" property to "styles" so we can pass styles as prop to another vue component
      const blocks = this.blocks.reduce((acc, block) => {
        const styles = block.style;
        delete block.style;
        block['styling'] = styles;
        return [
          ...acc,
          block
        ]
      }, [])
      return blocks;
    }
  }
};
</script>
