<template lang="html">
  <p>
    <RenderType
      v-for="block in children"
      :block="block"
      :styling="styling"
      :markDefs="getMarks(block)"
      :isCustomType="isCustomType"
      :key="block._key"
    />
  </p>
</template>

<script>

import RenderType from './RenderType.vue';

export default {
  props: {
    _type: String,
    children: Array,
    styling: String,
    markDefs: Array,
    serializers: Object
  },
  components: {
    RenderType
  },
  methods: {
    getMarks(block) {
      // Let the render component get all associated marks
      return this.markDefs.filter(markDef => {
        return block.marks.some(markId => markDef._key === markId);
      })
    }
  },
  computed: {
    isCustomType() {
      // Let the render component know if the type is a custom component from serializer
      const defaultTypes = ['span', 'em', 'underline', 'strike-through'];
      const serializerTypes = Object.keys(this.serializers.types);
      return defaultTypes.some(type => serializerTypes.includes(type));
    },
  }
}
</script>
