<template lang="html">
  <a :href="href"><slot></slot></a>
</template>

<script>

import BlockContent from '../blockcontent/index.vue';

export default {
  name: 'link-block',
  components: { BlockContent },
  props: {
    href: String,
  },
}
</script>
