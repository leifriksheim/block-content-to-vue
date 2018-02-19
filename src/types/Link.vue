<template lang="html">
  <a :href="href"><slot></slot></a>
</template>

<script>

export default {
  name: 'link-block',
  props: {
    href: String,
  },
}
</script>
