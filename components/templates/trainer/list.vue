<template>
  <Container>
    <!-- Tabs -->
    <Tabs :items="tabs" :tab="tab" @fnSelect="onSelectTab" />

    <!-- Filter -->
    <div class="mb-5">
      <FormSearch />
    </div>

    <!-- Table -->
    <TrainerTable :items="items" />
  </Container>
</template>

<script>
import Container from '@/components/atoms/container'
import FormSearch from '@/components/molecules/form/search'
// import Table from '@/components/molecules/table'
import Tabs from '@/components/molecules/tabs'
import TrainerTable from '@/components/molecules/table/trainer'

export default {
  name: 'TrainerListTemplate',

  components: {
    Container,
    FormSearch,
    Tabs,
    TrainerTable,
  },

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

  data() {
    return {
      tabs: [
        { label: 'Active', value: 'active' },
        { label: 'Pending', value: 'pending' },
        { label: 'Rejected', value: 'rejected' },
      ],
    }
  },

  methods: {
    onSelectTab(val) {
      this.$emit('fnSelectTab', val)
    },
  },
}
</script>
