<template>
  <div>
    <template v-for="block in blocks">
        <component :is="serializer[block._type]" v-bind="block" :key="block._key"></component>
    </template>
  </div>
</template>

<script>
export default {
  name: 'block-content',
  props: ['blocks', 'serializer'],
};
</script>
