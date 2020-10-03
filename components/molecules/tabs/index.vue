<template>
  <div class="flex border-b mb-5">
    <TabItem
      v-for="item of items"
      :key="item.label"
      :label="item.label"
      :value="item.value"
      :is-actived="item.value === tab"
      @fnSelect="onSelect"
    />
  </div>
</template>

<script>
import TabItem from '@/components/atoms/tab/item'

export default {
  name: 'Tabs',

  components: { TabItem },

  props: {
    items: {
      type: Array,
      default: () => [],
    },

    tab: {
      type: String,
      default: 'active',
    },
  },

  methods: {
    onSelect(val) {
      this.$emit('fnSelect', val)
    },
  },
}
</script>
