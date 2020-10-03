<template>
  <div class="flex">
    <Badge
      v-for="(item, index) of items"
      :key="index"
      :label="item.name"
      class="item"
    />
  </div>
</template>

<script>
import Badge from '@/components/atoms/badge'

export default {
  name: 'Badges',

  components: { Badge },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.item {
  @apply mx-1;
}

.item:first-child {
  @apply ml-0;
}

.item:last-child {
  @apply mr-0;
}
</style>
