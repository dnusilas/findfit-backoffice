<template>
  <MessateSenderTemplate />
</template>

<script>
import { mapActions } from 'vuex'

import MessateSenderTemplate from '@/components/templates/message/sender'

export default {
  name: 'MessagePage',

  components: { MessateSenderTemplate },

  async mounted() {
    console.log(await this.fetchBoardcastList())
  },

  methods: {
    ...mapActions('message', ['fetchBoardcastList']),
  },
}
</script>
