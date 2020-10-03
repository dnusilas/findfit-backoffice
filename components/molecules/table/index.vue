<template>
  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <Th v-for="(th, index) of ths" :key="index">{{ startCase(th) }}</Th>
        </tr>
      </thead>

      <Tbody>
        <tr v-for="(trs, index) of list" :key="index">
          <Td v-for="(td, tdIndex) of trs" :key="tdIndex">
            {{ trs[tdIndex] }}
          </Td>
        </tr>
      </Tbody>
    </table>
  </div>
</template>

<script>
import { keys, startCase } from 'lodash'

import Tbody from '@/components/atoms/table/tbody'
import Th from '@/components/atoms/table/th'
import Td from '@/components/atoms/table/td'

export default {
  name: 'Table',

  components: { Tbody, Th, Td },

  props: {
    fields: {
      type: Array,
      default: null,
    },

    list: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ths() {
      return keys(this.list[0])
    },
  },

  methods: {
    startCase,
  },
}
</script>
