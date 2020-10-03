<template>
  <div>
    <div></div>
    <div class="flex">
      <div class="w-1/3 lg:w-56">
        <Drawer />
      </div>
      <div class="flex-grow">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Drawer from '@/components/organisms/drawer'

export default {
  name: 'DefaultLayout',

  components: { Drawer },
}
</script>
