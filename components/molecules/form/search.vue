<template>
  <div class="flex items-end">
    <div class="mr-3 w-64">
      <InputText
        v-model="search.keyword"
        label="Keyword"
        type="text"
        aria-label="Keyword"
        name="keyword"
        required
        placeholder="Display name, Email, Phone no"
      />
    </div>
    <div>
      <Btn label="SEARCH" @fnClick="onSearch" />
    </div>
  </div>
</template>

<script>
import Btn from '@/components/atoms/btn'
import InputText from '@/components/atoms/input/text'

export default {
  name: 'SearchForm',

  components: { Btn, InputText },

  data() {
    return {
      search: {
        keyword: '',
      },
    }
  },

  methods: {
    onSearch() {
      const keyword = this.search.keyword
      const type = this.findType(keyword)

      this.$emit('fnSearch', { keyword, type })
    },

    findType(keyword) {},
  },
}
</script>
