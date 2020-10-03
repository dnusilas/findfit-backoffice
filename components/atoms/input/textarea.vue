<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <textarea
        v-model="val"
        class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
        :name="name"
        :required="required"
        :cols="cols"
        :rows="rows"
        :placeholder="placeholder"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTextarea',

  props: {
    label: {
      type: String,
      default: '',
    },

    value: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },

    required: {
      type: Boolean,
      default: false,
    },

    cols: {
      type: Number,
      default: 30,
    },

    rows: {
      type: Number,
      default: 10,
    },

    placeholder: {
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
    val(value) {
      this.$emit('input', value)
    },
  },
}
</script>
