<template>
  <div v-if="isShow">
    <div
      class="fixed top-0 left-0 w-screen h-screen bg-gray-900 opacity-75"
    ></div>
    <div
      class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"
    >
      <div
        v-click-outside="hide"
        :class="`bg-white rounded-md p-5 ${containerClasses}`"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'Modal',

  directives: {
    clickOutside: vClickOutside.directive,
  },

  props: {
    containerClasses: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isShow: false,
    }
  },

  beforeDestroy() {
    if (this.isShow) document.querySelector('body').classList.remove('hasmodal')
  },

  methods: {
    show() {
      document.querySelector('body').classList.add('hasmodal')
      this.isShow = true
    },

    hide() {
      document.querySelector('body').classList.remove('hasmodal')
      this.isShow = false
    },
  },
}
</script>
