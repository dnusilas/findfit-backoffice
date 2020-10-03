<template>
  <div>
    <TrainerListTemplate :items="list" :tab="tab" @fnSelectTab="onSelectTab" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import TrainerListTemplate from '@/components/templates/trainer/list'

export default {
  name: 'TrainerListPage',

  components: { TrainerListTemplate },

  data() {
    return {
      tab: this.$route.query.tab || 'active',

      list: [],

      pagination: {
        page: this.$route.query.page || 1,
      },
    }
  },

  mounted() {
    this.getList()
  },

  methods: {
    ...mapActions('trainer', ['fetchTrainers', 'fetchTrainersRegist']),

    getList() {
      if (this.tab === 'active') this.getTrainers()
      else this.getTrainersRegist()
    },

    async getTrainers() {
      const { lists, pagination } = await this.fetchTrainers()

      this.list = [...lists]
      this.pagination = { ...pagination }
    },

    async getTrainersRegist() {
      const { lists, pagination } = await this.fetchTrainersRegist({
        status: this.tab,
      })

      this.list = [...lists]
      this.pagination = { ...pagination }
    },

    onSelectTab(val) {
      this.tab = val
      this.$router.push({ query: { tab: val } })
      this.resetPatingation()
      this.getList()
    },

    resetPatingation() {
      this.pagination = { ...this.pagination, page: 1 }
    },
  },
}
</script>
