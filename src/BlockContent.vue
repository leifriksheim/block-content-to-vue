<template>
  <div>
    <template v-for="block in reducedBlocks">
      <Block v-if="block._type === 'block'" v-bind="block" :key="block._key"></Block>
      <component :is="serializer[block._type]" v-bind="block" :key="block._key"></component>
    </template>
  </div>
</template>

<script>

import BlockContent from './index.vue';
import Block from '../primitives/Block.vue';

export default {
  name: 'block-content',
 components: { Block },
  props: {
    blocks: Array,
    serializer: Object,
  },
  computed: {
    reducedBlocks() {
      // Change "style" property to "styles" so we can pass styles as prop to another vue component
      const blocks = this.blocks.reduce((acc, block) => {
        const styles = block.style;
        delete block.style;
        block['styles'] = styles;
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
