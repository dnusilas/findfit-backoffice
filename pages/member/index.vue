<template>
  <div><MemberListTemplate :items="list" /></div>
</template>

<script>
import { mapActions } from 'vuex'

import MemberListTemplate from '@/components/templates/member/list'

export default {
  name: 'MemberListPage',

  components: { MemberListTemplate },

  data() {
    return {
      list: [],
      pagination: {},
    }
  },

  mounted() {
    this.getMembers()
  },

  methods: {
    ...mapActions('member', ['fetchMembers']),

    async getMembers() {
      const { lists, pagination } = await this.fetchMembers()
      this.list = [...lists]
      this.pagination = { ...pagination }
    },
  },
}
</script>
