<template>
  <div :class="`text-${size}`">
    <b class="text-gray-600 text-xs mr-2 leading-7">{{ label }}:</b>
    <slot>{{ value }}</slot>
  </div>
</template>

<script>
export default {
  name: 'TrainerDetailList',

  props: {
    size: {
      type: String,
      default: 'base',
      validator(val) {
        return ['xl', 'lg', 'base', 'sm', 'xs'].includes(val)
      },
    },

    label: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },
  },
}
</script>
