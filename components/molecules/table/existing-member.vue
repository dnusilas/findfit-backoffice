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
          <Th class="text-right">
            <Btn size="xs" @fnClick="onRequestAdd">Add</Btn>
          </Th>
        </tr>
      </thead>

      <Tbody>
        <tr v-for="(td, index) of items" :key="index">
          <Td>{{ td.display }}</Td>
          <Td>{{ td.email }}</Td>
          <Td>{{ td.mobile }}</Td>
          <Td>{{ dateFormat(td.birthdate) }}</Td>
          <Td>{{ startCase(td.gender) }}</Td>
          <Td class="text-right">
            <Btn size="xs" :to="`/member/${td.member_id}`"
              ><i class="fad fa-info mr-1" />
              <span>
                Detail
              </span>
            </Btn>
            <Btn size="xs" @fnClick="() => onRequestRemove(td)">
              <span>
                Remove
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
import { dateFormat } from '@/libs/moment'

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
    dateFormat,

    statusClass(status) {
      switch (status) {
        case 'active':
          return 'text-green-600'
        default:
          return 'text-red-500'
      }
    },

    async onRequestAdd() {
      const { value } = await this.$swal({
        title: 'Submit member`s email',
        input: 'email',
      })

      if (!value) return

      this.$emit('fnAddExistMember', value)
    },

    async onRequestRemove(member) {
      const { value } = await this.$swal({
        title: 'Confirm remove member',
        showCancelButton: true,
      })

      if (!value) return

      this.$emit('fnRemoveExistMember', member.member_id)
    },
  },
}
</script>
