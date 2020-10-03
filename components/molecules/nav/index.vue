<template>
  <div>
    <NavItem
      v-for="(item, index) of items"
      :key="index"
      :label="item.label"
      :to="item.to"
      :icon="item.icon"
    />
  </div>
</template>

<script>
import NavItem from '@/components/atoms/nav-item'

export default {
  name: 'Nav',

  components: { NavItem },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
