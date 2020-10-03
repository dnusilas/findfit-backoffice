import { switchCaseList } from '@/libs/axios'

export default {
  async fetchPromotions(context, params) {
    try {
      const { data } = await this.$axios.get(
        '/backoffice/promo_code/get_list',
        {
          params,
        }
      )

      const res = switchCaseList(data)

      return res
    } catch (error) {}
  },
}
