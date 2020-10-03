import { switchCaseList, switchCaseDetail, verifyResponse } from '@/libs/axios'

export default {
  async fetchTrainers(context, params) {
    try {
      const { data } = await this.$axios.get(
        '/backoffice/member/get_trainer_list',
        {
          params,
        }
      )
      const res = switchCaseList(data)
      return res
    } catch (error) {}
  },

  async fetchTrainersRegist(context, params) {
    try {
      const { data } = await this.$axios.get(
        '/backoffice/trainer_regis/get_list',
        {
          params,
        }
      )
      const res = switchCaseList(data)
      return res
    } catch (error) {}
  },

  async fetchTrainerById({ commit }, params) {
    try {
      const { data } = await this.$axios.get(
        '/backoffice/member/get_trainer_detail',
        {
          params,
        }
      )
      const res = switchCaseDetail(data)

      commit('setTrainer', res)

      return res
    } catch (error) {}
  },

  // eslint-disable-next-line camelcase
  async updateTrainerStatus({ commit }, { member_id, status }) {
    try {
      const { data } = await this.$axios.post(
        'backoffice/member/update_status',
        { member_id, status }
      )

      const verified = verifyResponse(data)

      return verified
    } catch (error) {}
  },

  // eslint-disable-next-line camelcase
  async updateTrainerRemark(context, { member_id, remark }) {
    try {
      const { data } = await this.$axios.post(
        'backoffice/member/update_remark',
        { member_id, remark }
      )

      const verified = verifyResponse(data)

      return verified
    } catch (error) {}
  },

  // eslint-disable-next-line camelcase
  async createExistMemberToTrainer(context, { member_id, email }) {
    try {
      const { data } = await this.$axios.post(
        'backoffice/member/add_trainee_special',
        {
          member_id,
          email,
        }
      )

      const verified = verifyResponse(data)

      return verified
    } catch (error) {}
  },

  // eslint-disable-next-line camelcase
  async deleteExistMemberToTrainer(context, { member_id, trainee_member_id }) {
    try {
      const { data } = await this.$axios.post(
        'backoffice/member/remove_trainee_special',
        {
          member_id,
          trainee_member_id,
        }
      )

      const verified = verifyResponse(data)

      return verified
    } catch (error) {}
  },
}
