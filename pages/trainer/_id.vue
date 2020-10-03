<template>
  <div>
    <TrainerDetailTemplate
      v-if="isReady"
      @fnChangeStatus="onChangeStatus"
      @fnAddNote="onAddNote"
      @fnAddExistMember="onAddExistMember"
      @fnRemoveExistMember="onRemoveExistMember"
    />

    <Loading v-else />
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
import { isEmpty } from 'lodash'

import TrainerDetailTemplate from '@/components/templates/trainer/detail'
import Loading from '@/components/molecules/loading'

export default {
  name: 'TrainerDetailPage',

  components: { TrainerDetailTemplate, Loading },

  data() {
    return {
      id: this.$route.params.id || null,
    }
  },

  computed: {
    ...mapState('trainer', ['trainer']),

    isReady() {
      return !isEmpty(this.trainer)
    },
  },

  mounted() {
    this.getTrainer()
  },

  beforeDestroy() {
    this.resetTrainer()
  },

  methods: {
    ...mapActions('trainer', [
      'fetchTrainerById',
      'updateTrainerStatus',
      'updateTrainerRemark',
      'createExistMemberToTrainer',
      'deleteExistMemberToTrainer',
    ]),

    ...mapMutations('trainer', ['resetTrainer']),

    async getTrainer() {
      await this.fetchTrainerById({ member_id: this.id })
    },

    async onChangeStatus(status) {
      const res = await this.updateTrainerStatus({
        member_id: this.trainer.member_id,
        status,
      })

      if (res.error) return this.$swal({ icon: 'error', title: res.error })

      this.getTrainer()
    },

    async onAddNote(form) {
      const res = await this.updateTrainerRemark({
        member_id: this.trainer.member_id,
        remark: form.note,
      })

      if (res.error) return this.$swal({ icon: 'error', title: res.error })

      this.getTrainer()
    },

    async onAddExistMember(email) {
      const res = await this.createExistMemberToTrainer({
        member_id: this.trainer.member_id,
        email,
      })

      if (res.error) return this.$swal({ icon: 'error', title: res.error })

      this.getTrainer()
    },

    async onRemoveExistMember(traineeId) {
      const res = await this.deleteExistMemberToTrainer({
        member_id: this.trainer.member_id,
        trainee_member_id: traineeId,
      })

      if (res.error) return this.$swal({ icon: 'error', title: res.error })

      this.getTrainer()
    },
  },
}
</script>
