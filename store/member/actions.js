import { switchCaseList, switchCaseDetail } from '@/libs/axios'

export default {
  async fetchMembers(context, params) {
    try {
      const { data } = await this.$axios.get(
        '/backoffice/member/get_member_list',
        {
          params,
        }
      )

      const res = switchCaseList(data)

      return res
    } catch (error) {}
  },

  async fetchMemberById({ commit }, params) {
    try {
      const { data } = await this.$axios.get(
        'backoffice/member/get_member_detail',
        {
          params,
        }
      )

      const res = switchCaseDetail(data)
      commit('setMember', res)
      return res
    } catch (error) {}
  },

  async fetchCourse({ commit }, params) {
    try {
      const { data } = await this.$axios.get('backoffice/course/get_list', {
        params,
      })
      const res = switchCaseList(data)
      commit('setCourse', res)
    } catch (error) {}
  },

  async fetchBookingLogs({ commit }, params) {
    try {
      const { data } = await this.$axios.get('backoffice/course/get_list', {
        params,
      })
      const res = switchCaseList(data)
      commit('setBookingLogs', res)
    } catch (error) {}
  },
}
