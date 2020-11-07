import { switchCaseList } from '@/libs/axios'

export default {
  async fetchBoardcastList({ commit }, params) {
    const { data } = await this.$axios.get('backoffice/course/get_list', {
      params,
    })
    const res = switchCaseList(data)

    return res
  },

  createBoardcast() {},
}
