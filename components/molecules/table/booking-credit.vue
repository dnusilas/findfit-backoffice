<template>
  <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <Th>Course</Th>
          <Th>Trainer</Th>
          <Th>Credit Price <small>(THB)</small></Th>
          <Th>Total Credit Bought</Th>
          <Th>Total Credit Used</Th>
          <Th class="bg-orange-100 text-orange-600">Total Adjusted</Th>
          <Th>Total Credit Available</Th>
          <Th></Th>
        </tr>
      </thead>

      <Tbody>
        <tr>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td class="bg-orange-100 text-orange-600"></Td>
          <Td></Td>
          <Td></Td>
        </tr>
      </Tbody>
    </table>
  </div>
</template>

<script>
import Tbody from '@/components/atoms/table/tbody'
import Th from '@/components/atoms/table/th'
import Td from '@/components/atoms/table/td'

export default {
  components: { Tbody, Th, Td },
}
</script>
