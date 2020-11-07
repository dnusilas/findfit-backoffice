<template>
  <NuxtLink v-if="to" :class="buttonClass" :to="to">
    <slot>{{ label }}</slot>
  </NuxtLink>
  <button v-else :class="buttonClass" :type="type" @click.prevent="onClick">
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    size: {
      type: String,
      default: 'base',
      validator(val) {
        return ['xl', 'lg', 'base', 'sm', 'xs'].includes(val)
      },
    },

    variant: {
      type: String,
      default: '',
      validator(val) {
        return ['', 'link'].includes(val)
      },
    },

    label: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'button',
      validator(val) {
        return ['button', 'submit'].includes(val)
      },
    },

    onclick: {
      type: Function,
      default: () => {},
    },

    to: {
      type: [Object, String],
      default: null,
    },

    blocked: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    styleClasses() {
      switch (this.variant) {
        case 'link':
          return 'btn--link'
        default:
          return ''
      }
    },

    paddingClass() {
      switch (this.size) {
        case 'xs':
          return 'px-3'
        case 'sm':
          return 'px-5'
        default:
          return 'px-10'
      }
    },

    buttonClass() {
      return `btn inline-block py-2 font-bold rounded-sm text-${this.size} ${this.styleClasses} ${this.paddingClass}`
    },
  },

  methods: {
    onClick() {
      this.$emit('fnClick')
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
.btn {
  @apply text-white;
  background-color: var(--main-btn-color);
  transition: background-color 0.3s ease-in-out;
}

.btn:hover {
  @apply bg-orange-500;
}

.btn:focus {
  @apply outline-none;
}

.btn.btn--link {
  transition: color 0.3s ease-in-out;
  background-color: transparent;
  color: var(--main-btn-color);
}
.btn.btn--link:hover {
  @apply text-orange-500;
}
</style>
