<template>
  <div class="item">
    <nuxt-link class="link" active-class="actived" :to="to">
      <i :class="`fad fa-${icon} mr-2`" />
      {{ label }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'NavItem',

  props: {
    label: {
      type: String,
      default: '',
    },

    to: {
      type: Object || String,
      default: () => ({
        name: 'index',
      }),
    },

    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="css" scoped>
.item {
}

.link {
  @apply block;
  @apply py-2;
  @apply px-4;
}

.link:hover {
  @apply bg-yellow-400;
}

.link.actived {
  @apply border-r-4;
  @apply border-yellow-600;
  @apply bg-yellow-800;
  @apply text-white;
}
</style>
