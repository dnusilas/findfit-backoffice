<template>
  <div class="flex justify-between p-10">
    <div>
      <div class="w-48 rounded-lg overflow-hidden">
        <img
          class="w-full h-full object-cover"
          :src="member.profile_image.url"
        />
      </div>
    </div>
    <div class="flex-grow">
      <div class="px-5">
        <div class="flex justify-between">
          <div class="mb-5">
            <div class="mb-4">
              <div class="text-sm">{{ startCase(member.role) }}</div>
              <div class="text-5xl leading-10">
                {{ startCase(member.display) }}
              </div>
            </div>

            <TrainerDetailList
              label="Gender"
              :value="startCase(member.gender)"
            />

            <TrainerDetailList
              label="Date of Birth"
              :value="dateFormat(member.birthdate)"
            />

            <TrainerDetailList label="Email" :value="member.email" />
          </div>

          <div class="flex-grow-0">
            <div @click.prevent="onRequestChangeStatus">
              <InputSwitch
                v-model="isActived"
                :is-disabled="true"
                checked-label="Actived"
                uncheck-label="Inactive"
              />
            </div>
          </div>
        </div>

        <div class="mb-5">
          <h5 class="font-lg font-bold text-gray-800 mb-4">Booking credits</h5>
          <BookintCreditTable />
        </div>

        <div class="mb-5">
          <h5 class="font-lg font-bold text-gray-800 mb-4">Booking logs</h5>
          <BookintLogsTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { startCase } from 'lodash'

import { dateFormat } from '@/libs/moment'

import TrainerDetailList from '@/components/molecules/trainer/detail/list'
import InputSwitch from '@/components/atoms/input/switch'
import BookintCreditTable from '@/components/molecules/table/booking-credit'
import BookintLogsTable from '@/components/molecules/table/booking-logs'

export default {
  name: 'MemberDetailTemplate',

  components: {
    TrainerDetailList,
    InputSwitch,
    BookintCreditTable,
    BookintLogsTable,
  },

  computed: {
    ...mapState('member', ['member']),

    isActived() {
      return this.member.status === 'active'
    },
  },

  methods: {
    startCase,
    dateFormat,

    async onRequestChangeStatus() {
      const { value } = await this.$swal({
        icon: 'question',
        title: 'Confirm Change',
        showCancelButton: true,
      })

      if (!value) return

      const status = this.member.status === 'active' ? 'inactive' : 'active'

      this.$emit('fnChangeStatus', status)
    },
  },
}
</script>
