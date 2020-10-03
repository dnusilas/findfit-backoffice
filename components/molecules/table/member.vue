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
          <Th>Approved At</Th>
          <Th>Approved By</Th>
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
          <Td></Td>
          <Td></Td>
          <Td>
            <span :class="statusClass(td.status)">
              {{ startCase(td.status) }}
            </span>
          </Td>
          <Td></Td>
          <Td></Td>
          <Td>
            <Btn size="sm" :to="`/member/${td.member_id}`"
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
import { startCase } from 'lodash'
import moment from 'moment'

import Tbody from '@/components/atoms/table/tbody'
import Th from '@/components/atoms/table/th'
import Td from '@/components/atoms/table/td'
import Btn from '@/components/atoms/btn'

export default {
  name: 'MemberTable',

  components: {
    Tbody,
    Th,
    Td,
    Btn,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    startCase,

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
