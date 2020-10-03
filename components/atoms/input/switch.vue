<template>
  <button class="focus:outline-none" @click.prevent="toggle">
    <i :class="`fas ${value ? 'fa-toggle-on' : 'fa-toggle-off'}`"></i>
    {{ value ? checkedLabel : uncheckLabel }}
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },

    checkedLabel: {
      type: String,
      default: 'Checked',
    },

    uncheckLabel: {
      type: String,
      default: 'Uncheck',
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggle() {
      if (this.isDisabled) return
      this.$emit('input', !this.value)
    },
  },
}
</script>
