<template>
  <div>
    <label class="block mb-3">{{ label }}</label>
    <input
      v-model="val"
      :type="type"
      :aria-label="ariaLabel"
      :name="name"
      class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
      :placeholder="placeholder"
    />
    <small v-if="error" class="text-red-600">{{ error }}</small>
  </div>
</template>

<script>
export default {
  name: 'InputText',

  props: {
    label: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    ariaLabel: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    error: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      val: this.value || '',
    }
  },

  watch: {
    val(newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>
