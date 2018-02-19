<template lang="html">
  <s>
  {{ filteredMarks.length ? '' : text }}
  <Block v-if="filteredMarks.length" :styles="styles" :children="filteredMarks">
    <template slot-scope="spanscope">
      {{text}}
    </template>
  </Block>
  </s>
</template>

<script>

import Block from './Block.vue';
import serializer from './defaultSerializer';

export default {
  name: 'strike-block',
  props: {
    text: String,
    markDefs: Array,
    marks: Array,
    styles: String,
  },
  // https://vuejs.org/v2/guide/components.html#Circular-References-Between-Components
  beforeCreate: function () {
    this.$options.components.Block = require('./Block.vue').default
  },
  data() {
    return {
      serializer
    }
  },
  computed: {
    filteredMarks() {
      // Return the marks that match
      return this.markDefs.filter(markDef => {
        if (!this.marks.length) {return false};
        return this.marks.map(mark => mark === markDef._key);
      })
    }
  }
}
</script>
