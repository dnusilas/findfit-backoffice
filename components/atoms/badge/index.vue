<template>
  <div class="bg-primary badge">
    <slot>{{ label }}</slot>
  </div>
</template>

<script>
export default {
  name: 'Badge',

  props: {
    label: {
      type: String,
      default: 'Untitled',
    },
  },
}
</script>

<style scoped>
.badge {
  @apply rounded-full;
  @apply py-1;
  @apply px-4;
  @apply text-xs;
}
</style>
