<template>
  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <Th>Display Name</Th>
          <Th>Email</Th>
          <Th>Phone no.</Th>
          <Th>Date of Birth</Th>
          <Th>Gender</Th>
          <Th>Workout Type</Th>
          <Th>Bank</Th>
          <Th>Status</Th>
          <Th>Approved</Th>
          <Th></Th>
        </tr>
      </thead>

      <Tbody>
        <tr v-for="(td, index) of items" :key="index">
          <Td>{{ td.display }}</Td>
          <Td>{{ td.email }}</Td>
          <Td>{{ td.mobile }}</Td>
          <Td>{{ dateFormat(td.birthdate) }}</Td>
          <Td>{{ startCase(td.gender) }}</Td>
          <Td>
            <Badges :items="td.a_workout" />
          </Td>
          <Td>
            <div class="text-xs leading-4">
              {{ td.bank.name }}
            </div>
            <div class="text-sm leading-4">
              {{ td.bookbank_no }}
            </div>
            <div class="text-xs leading-4">
              {{ upperCase(td.bookbank_name) }}
            </div>
          </Td>
          <Td>
            <span :class="statusClass(td.status)">
              {{ startCase(td.status) }}
            </span>
          </Td>
          <Td>{{ dateFormat(td.datetime_trainer_approved) }}</Td>
          <Td>
            <Btn size="sm" :to="`/trainer/${td.member_id}`"
              ><i class="fad fa-info mr-1" />
              <span>
                Detail
              </span>
            </Btn>
          </Td>
        </tr>
      </Tbody>
    </table>
  </div>
</template>

<script>
import { startCase, upperCase } from 'lodash'
import moment from 'moment'

import Tbody from '@/components/atoms/table/tbody'
import Th from '@/components/atoms/table/th'
import Td from '@/components/atoms/table/td'
import Btn from '@/components/atoms/btn'
import Badges from '@/components/molecules/badges'

export default {
  name: 'TrainerTable',

  components: {
    Tbody,
    Th,
    Td,
    Btn,
    Badges,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    startCase,
    upperCase,

    statusClass(status) {
      switch (status) {
        case 'active':
          return 'text-green-600'
        default:
          return 'text-red-500'
      }
    },

    dateFormat(date) {
      return moment(date).format('DD MMM YYYY')
    },
  },
}
</script>
