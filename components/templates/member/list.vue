<template>
  <Container>
    <!-- Filter -->
    <div class="mb-5">
      <FormSearch @fnSearch="onSearch" />
    </div>

    <!-- Table -->
    <Table :items="items" />
  </Container>
</template>

<script>
import Container from '@/components/atoms/container'
import FormSearch from '@/components/molecules/form/search'
import Table from '@/components/molecules/table/member'

export default {
  components: { Container, FormSearch, Table },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    onSearch(search) {
      console.log(search)
    },
  },
}
</script>
