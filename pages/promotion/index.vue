<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PromotionListPage',

  data() {
    return {}
  },

  mounted() {
    this.getPromotions()
  },

  methods: {
    ...mapActions('promotion', ['fetchPromotions']),

    async getPromotions() {
      const res = await this.fetchPromotions()
      console.log(res)
    },
  },
}
</script>
