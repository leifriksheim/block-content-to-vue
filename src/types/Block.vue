<template lang="html">
  <span>
    <template v-for="block in children">

      <Block
        v-if="block._type === 'block'"
        v-bind="block"
        :key="block._key">
      </Block>

      <h1 v-if="styles === 'h1'">
        <component
          :is="serializer[block._type]"
          v-bind="block"
          :styles="styles"
          :markDefs="markDefs"
          :key="block._key">
          <slot></slot>
        </component>
      </h1>

      <h2 v-if="styles === 'h2'">
        <component
          :is="serializer[block._type]"
          v-bind="block"
          :styles="styles"
          :markDefs="markDefs"
          :key="block._key">
          <slot></slot>
        </component>
      </h2>

      <h3 v-if="styles === 'h3'">
        <component
          :is="serializer[block._type]"
          v-bind="block"
          :styles="styles"
          :markDefs="markDefs"
          :key="block._key">
          <slot></slot>
        </component>
      </h3>

      <h4 v-if="styles === 'h4'">
        <component
          :is="serializer[block._type]"
          v-bind="block"
          :styles="styles"
          :markDefs="markDefs"
          :key="block._key">
          <slot></slot>
        </component>
      </h4>

      <h5 v-if="styles === 'h5'">
        <component
          :is="serializer[block._type]"
          v-bind="block"
          :styles="styles"
          :markDefs="markDefs"
          :key="block._key">
          <slot></slot>
        </component>
      </h5>

      <h6 v-if="styles === 'h6'">
        <component
          :is="serializer[block._type]"
          v-bind="block"
          :styles="styles"
          :markDefs="markDefs"
          :key="block._key">
          <slot></slot>
        </component>
      </h6>

      <component
        v-if="styles === 'normal'"
        :is="serializer[block._type]"
        v-bind="block"
        :styles="styles"
        :markDefs="markDefs"
        :key="block._key">
        <slot></slot>
      </component>

    </template>
  </span>
</template>

<script>

import Block from './Block.vue';
import serializer from '../serializer';

export default {
  name: 'block',
  props: {
    _key: String,
    children: Array,
    markDefs: Array,
    styles: String,
  },
  components: { Block },
  data() {
    return {
      serializer
    }
  },
}
</script>

<style lang="css">
</style>
