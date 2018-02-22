<template lang="html">
  <div>
    <template v-for="block in children">
      <RenderCustomType v-if="isCustomBlock" :block="block" :serializers="serializers" :key="block._key" />
      <RenderDefaultType v-else :block="block" :serializers="serializers" :key="block._key" />
    </template>
  </div>
</template>

<script>

import RenderCustomType from './RenderCustomType.vue';
import RenderDefaultType from './RenderDefaultType.vue';

export default {
  props: {
    _type: String,
    children: Array,
    styling: String,
    markDefs: Array,
    serializers: Object
  },
  components: {
    RenderCustomType,
    RenderDefaultType
  },
  methods: {
    getMark(block) {
      console.log('block', block);
    },
  },
  computed: {
    isCustomBlock() {
      const defaultTypes = ['span', 'em', 'underline', 'strike-through'];
      const serializerTypes = Object.keys(this.serializers.types);

      return defaultTypes.some(type => serializerTypes.includes(type));
    },
  }
}
</script>
