<template>
  <div>
    <button
      :class="`tabitem ${isActived && 'tabitem__actived'}`"
      @click.prevent="onSelect"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'TabItem',

  props: {
    label: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },

    isActived: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    onSelect() {
      this.$emit('fnSelect', this.value)
    },
  },
}
</script>

<style scoped>
.tabitem {
  @apply py-2;
  @apply px-5;
}

.tabitem:focus {
  @apply outline-none;
}

.tabitem__actived {
  color: white;
  background-color: var(--main-btn-color);
}
</style>
