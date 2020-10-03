<template>
  <div>
    <MemberDetailTemplate v-if="isReady" @fnChangeStatus="onChangeStatus" />

    <Loading v-else />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import MemberDetailTemplate from '@/components/templates/member/detail'
import Loading from '@/components/molecules/loading'

export default {
  name: 'MemberDetailPage',

  components: { MemberDetailTemplate, Loading },

  data() {
    return {
      id: this.$route.params?.id || false,

      isReady: false,
    }
  },

  computed: {
    ...mapState('member', ['member', 'course', 'bookingLogs']),
  },

  async mounted() {
    this.getMember()

    await this.$axios.get('/backoffice/course/get_list', {
      params: { member_id: this.id },
    })
  },

  beforeDestroy() {
    this.resetMember()
    this.resetCourse()
    this.resetBookingLogs()
  },

  methods: {
    ...mapActions('trainer', ['updateTrainerStatus']),

    ...mapActions('member', [
      'fetchMemberById',
      'fetchCourse',
      'fetchBookingLogs',
    ]),

    ...mapMutations('member', [
      'resetMember',
      'resetCourse',
      'resetBookingLogs',
    ]),

    async getMember() {
      this.isReady = false
      await Promise.all([
        this.fetchMemberById({ member_id: this.id }),
        this.fetchCourse({ member_id: this.id }),
        this.fetchBookingLogs({ member_id: this.id }),
      ])
      this.isReady = true
    },

    async onChangeStatus(status) {
      const res = await this.updateTrainerStatus({
        member_id: this.member.member_id,
        status,
      })

      if (res.error) return this.$swal({ icon: 'error', title: res.error })

      this.getMember()
    },
  },
}
</script>
